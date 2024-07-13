import {useGet} from "../../../../Classes/RequestHooks";
import Endpoints from "../../../../Classes/Endpoints";
import React, {useEffect, useState} from "react";
import Toggle from "../../../Toggle/Toggle";
import CustomTable from "../../../CustomTable/CustomTable";
import {toNis, toPercentage} from "../../../../Classes/StringUtils";
import {AccountBalanceWallet, MonetizationOn, Payment, Payments, Person} from "@mui/icons-material";
import CardInside from "../../PortalHome/Cards/Card/CardInside";
import Card from "../../PortalHome/Cards/Card/Card";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const cardConfig = [
    {
        key: 'firstPayment',
        header: 'תשלום ראשון',
        icon: <AccountBalanceWallet/>,
        color: '#f8b400',
        help: 'ההחזר החודשי הצפוי בחודש הראשון'
    },
    {
        key: 'forecastedTotalInterest',
        header: 'ריבית צפויה',
        icon: <TrendingUpIcon/>,
        color: '#3f51b5',
        help: 'הריבית החזויה (או IRR) היא הריבית הממוצעת שצפויה לתשלום על סך ההלוואה'
    },
    {
        key: 'maxPayment',
        header: 'תשלום מקסימלי',
        icon: <Payments/>,
        color: '#f44336',
        help: 'התשלום המקסימלי שיש לשלם על סך ההלוואה'
    },
    {
        key: 'paymentsAverage',
        header: 'ממוצע תשלומים',
        icon: <Payment/>,
        color: '#4caf50',
        help: 'התשלום החודשי הממוצע לאורך כל תקופת ההלוואה'
    },
    {
        key: 'totalInterest',
        header: 'סהכ ריבית ששולמה',
        icon: <MonetizationOn/>,
        color: '#f8b400',
        help: 'סך כל תשלומי הריבית ששולמו'
    },
    {
        key: 'totalPayment',
        header: 'סהכ לתשלום',
        icon: <Payment/>,
        color: '#3f51b5',
        help: 'סך כל תשלומי ההלוואה ששולמו'
    },
];

const TabAmortizationSchedule = ({key}) => {
    const {data, fetchApi, isLoading} = useGet();
    const {data: mortgageGroupsData, fetchApi: fetchMortgageGroupsData} = useGet();
    const [groupNames, setGroupNames] = useState([]);
    const [selectedGroupName, setSelectedGroupName] = useState(null);
    const [mappedData, setMappedData] = useState([{}]);
    const colNames = {
        names: ['date', 'interestPaid', 'payment', 'principalPaid', 'remainingBalance'],
        display: ['תאריך', 'ריבית ששולמה', 'תשלום', 'תשלום קרן', 'יתרת ההלוואה']
    }
    const [cardsData, setCardsData] = useState([{}]);

    useEffect(() => {
        fetchMortgageGroupsData(Endpoints.MORTGAGE_GROUP_ENDPOINT);
    }, [key]);

    useEffect(() => {
        setGroupNames(getNames());
    }, [mortgageGroupsData]);

    const createCardData = (data) => cardConfig.map(({key, header, icon, color, help}) => {
        const value =
            !data ? "--" :
                key === 'forecastedTotalInterest' ?
                    toPercentage(data[key] || "") :
                    toNis(data[key] || "");

        return {
            data: {
                value: value,
                date: new Date().toLocaleDateString()
            }, header, icon, iconColor: color, help
        }
    });

    useEffect(() => {
        setMappedData(data?.payments?.map((payment) => {
            return {
                date: payment.date,
                interestPaid: toNis(payment.interestPaid),
                payment: toNis(payment.payment),
                principalPaid: toNis(payment.principalPaid),
                remainingBalance: toNis(payment.remainingBalance)
            }
        }));

        setCardsData(createCardData(data));
    }, [data]);

    const loadAmortizationSchedule = () => {
        const selected = getSelectedGroup();
        console.log(selected)
        if (!selected) return;
        fetchApi(Endpoints.AMORTIZATION_SCHEDULE_ENDPOINT.addPath(selected?.id));
    }

    const getNames = () => {
        return mortgageGroupsData?.map((group) => group.groupName);
    }
    const getSelectedGroup = () => {
        return mortgageGroupsData?.find(group => group.groupName === selectedGroupName);
    }


    return (
        <div>
            <div>
                <div className="container-fluid">
                    <div className="row px-2">
                        <div className="container-fluid card secondary-bg card-data">
                            <div className="row py-3">
                                <div className="col-4 text-light d-flex justify-content-start">
                                    <h3>לוח תשלומים להצעות</h3>
                                </div>
                                <div className="col-8 d-flex justify-content-end">
                                    <Toggle className="mx-2"
                                            defaultHeader="בחירת הצעה לחישוב"
                                            onChange={(e) => setSelectedGroupName(e.target.string)}
                                            items={groupNames}/>
                                    <button className="accent-bg button ml-2"
                                            onClick={loadAmortizationSchedule}>
                                        חישוב
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="row px-2">
                    {cardsData.map((card, index) => {
                        return (
                            <Card key={index}
                                  className="col-6 col-lg-4 col-xxl-2 mt-2"
                                  isLoading={isLoading}
                                  header={card.header}
                                  icon={card.icon}
                                  data={card.data}
                                  help={card.help}
                                  iconColor={card.iconColor}>
                                <CardInside isLoading={isLoading} data={{value: ""}}/>
                            </Card>
                        )
                    })}
                </div>
            </div>
            <hr/>
            <div>
                <CustomTable data={mappedData}
                             isLoading={isLoading}
                             tableStyle={{height: '50dvh'}}
                             columns={colNames}/>
            </div>
        </div>
    );
}

export default TabAmortizationSchedule;

/* example

{
    "payments": [
        {
            "payment": 731.6418566562573,
            "remainingBalance": 249881.46837760115,
            "interestPaid": 72.882094943467,
            "principalPaid": 658.7597617127904,
            "date": "2024-07-08"
        },
        {
            "payment": 733.2269461086432,
            "remainingBalance": 249761.0609739468,
            "interestPaid": 72.84697611740114,
            "principalPaid": 660.3799699912421,
            "date": "2024-08-08"
        },
    ],
    "paymentsAverage": 1107.9705801472012,
    "totalInterest": 17632.407219533296,
    "totalPayment": 398869.4088529924,
    "totalPrincipal": 381237.00163345906,
    "forecastedTotalInterest": 2.9829108293452533,
    "cpi": 2.623967195,
    "firstPayment": 731.6418566562573,
    "maxPayment": 1609.9963431896238
}

 */