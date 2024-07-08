import {useGet} from "../../../../Classes/RequestHooks";
import Endpoints from "../../../../Classes/Endpoints";
import React, {useEffect, useState} from "react";
import Toggle from "../../../Toggle/Toggle";
import CustomTable from "../../../CustomTable/CustomTable";


const TabAmortizationSchedule = ({key}) => {
    const {data, fetchApi, isLoading} = useGet();
    const {data: mortgageGroupsData, fetchApi: fetchMortgageGroupsData} = useGet();
    const [groupNames, setGroupNames] = useState([]);
    const [selectedGroupName, setSelectedGroupName] = useState(null);
    const [mappedData, setMappedData] = useState([{}]);

    const colNames = {
        names: ['date', 'interestPaid', 'payment', 'principalPaid', 'remainingBalance'],
        display: ['תאריך', 'ריבית ששולמה', 'תשלום', 'הוצאת ריבית', 'יתרת ההלוואה']
    }

    useEffect(() => {
        fetchMortgageGroupsData(Endpoints.MORTGAGE_GROUP_ENDPOINT);
    }, [key]);

    useEffect(() => {
        setGroupNames(getNames());
    }, [mortgageGroupsData]);

    useEffect(() => {
        setMappedData(data?.payments?.map((payment) => {
            return {
                date: payment.date,
                interestPaid: `₪${parseFloat(payment.interestPaid).toFixed(2)}`,
                payment: `₪${parseFloat(payment.payment).toFixed(2)}`,
                principalPaid: `₪${parseFloat(payment.principalPaid).toFixed(2)}`,
                remainingBalance: `₪${parseFloat(payment.remainingBalance).toFixed(2)}`
            }
        }));
    }, [data]);

    const loadAmortizationSchedule = () => {
        const group = getSelectedGroup();
        console.log(group);
        const id = getSelectedGroup()?.id;
        fetchApi(Endpoints.AMORTIZATION_SCHEDULE_ENDPOINT.addPath(id));
    }

    const getNames = () => {
        return mortgageGroupsData?.map((group) => group.groupName);
    }
    const getSelectedGroup = () =>{
        return mortgageGroupsData?.find(group => group.groupName === selectedGroupName);
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Toggle className="mx-2"
                                defaultHeader="בחירת הצעה"
                                onChange={(e) => setSelectedGroupName(e.target.string)}
                                items={groupNames}/>
                    </div>
                    <div className="col">
                        <button className="accent-bg button"
                                onClick={loadAmortizationSchedule}>
                            טעינה
                        </button>
                    </div>
                </div>
                <hr/>
                <div className="row">

                </div>
            </div>
            <div>
                <CustomTable data={mappedData}
                             isLoading={isLoading}
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