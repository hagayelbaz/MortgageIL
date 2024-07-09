import Help from "../../Help/Help";
import EditIcon from "@mui/icons-material/Edit";
import CustomTable from "../../CustomTable/CustomTable";


const BorrowersTable = ({ borrowers, setSelectedBorrower, setEditMode }) => {
    const colData = {
        names: ["firstName", "lastName", "email", "phoneNumber"],
        display: ["שם פרטי", "שם משפחה", "אימייל", "טלפון"]
    };

    const setSelected = (usr) => {
        const current = borrowers.find(borrower => borrower.id === usr.id);
        setSelectedBorrower(current);
        setEditMode(true);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <CustomTable data={borrowers}
                             columns={colData}
                             spacialIcon={(borrower) => (
                                 <Help text="לחץ על עריכה כדי לערוך את פרטי הלקוח">
                                     <EditIcon role="button"
                                               className="p-0 mx-1"
                                               onClick={() => setSelected(borrower)}/>
                                 </Help>
                             )}
                             tableStyle={{maxHeight: '65dvh'}}/>
            </div>
        </div>
    )
}

export default BorrowersTable;