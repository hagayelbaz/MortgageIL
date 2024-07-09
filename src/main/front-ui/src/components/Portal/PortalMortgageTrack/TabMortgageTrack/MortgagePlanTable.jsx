import EditIcon from "@mui/icons-material/Edit";
import Help from "../../../Help/Help";
import CustomTable from "../../../CustomTable/CustomTable";

//TODO: impl edit mortgage plan
const MortgagePlanTable = ({planGroup}) => {
    const colData = {
        names: ["typeDescription", "amount", "interestRate", "duration", "startDate"],
        display: ["סוג משכנתא", "סכום", "ריבית", "משך", "תאריך התחלה"]
    };


    return (
        <div className="container-fluid">
            <div className="row">
                <CustomTable data={planGroup}
                             columns={colData}
                             spacialIcon={(plan) => (
                                 <Help text="">
                                     <EditIcon role="button"
                                               className="p-0 mx-1"/>
                                 </Help>
                             )}
                             tableStyle={{maxHeight: '65dvh'}}/>
            </div>
        </div>
    )
}

export default MortgagePlanTable;