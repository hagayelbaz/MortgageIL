import {useEffect, useState} from "react";
import CustomTable from "../../../../CustomTable/CustomTable";
import IconButton from "@rjsf/core/lib/components/templates/ButtonTemplates/IconButton";
import {ImportContacts} from "@mui/icons-material";
import Help from "../../../../Help/Help";
import EditIcon from "@mui/icons-material/Edit";


const TableBanksInterest = ({isLoading, error, isOK, data}) => {
    const [mappedData, setMappedData] = useState([]);
    const colData = {
        names: ["bank", "mortgage", "value", "date"],
        display: ["בנק", "מסלול", "ריבית", "תאריך"]
    };

    useEffect(() => {
        if (data) {
            const filteredAndMappedData = data
                .filter(item => item.bankCode !== 99)  // Exclude items where bankCode is 99
                .map(item => ({
                    bank: item.bank,
                    mortgage: item.mortgage,
                    value: `${parseFloat(item.value).toFixed(2)}%`,
                    date: item.date,
                    color: item.bankColor,
                    logo: item.logoUrl
                }));

            setMappedData(filteredAndMappedData);
        }
    }, [data]);


    return (
        <div className="card secondary-bg card-data text-light h-100">
            <div className="card-body pb-0 mb-0">
                <CustomTable data={mappedData}
                             tableStyle={{height: "40dvh"}}
                             columns={colData}
                             spacialIcon={(bank) => (
                                 <img src={bank.logo} alt={bank.bank} style={
                                     {width: "30px", height: "30px"}
                                 }/>
                             )}/>
            </div>
        </div>
    )
}

export default TableBanksInterest;