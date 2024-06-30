import './PortalBorrowers.css';
import CustomTable from "../../CustomTable/CustomTable";
import {colData, colData2, table2, tableData, userData} from "../../../Classes/TestData";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from '@mui/icons-material/Edit';
import {Accordion, Col, Row} from "react-bootstrap";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Help from "../../Help/Help";
import {useContext, useEffect, useState} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SaveIcon from '@mui/icons-material/Save';
import CustomInput from "../../CustomInput/CustomInput";
import {Person} from "@mui/icons-material";
import FormHeader from "../../FormHeader/FormHeader";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import {UserDataContext} from "../../../Provider/UserDataProvider";
import NewBorrower from "./NewBorrower";
import {useGet, usePut} from "../../../Classes/RequestHooks";
import Endpoints from "../../../Classes/Endpoints";
import EditBorrower from "./EditBorrower";
import BorrowersTable from "./BorrowersTable";
import NewBorrowerButton from "./NewBorrowerButton";
import CurrentBorrowerOption from "./CurrentBorrowerOption";
import {useNotifications} from "../../../Provider/NotificationProvider";


const PortalBorrowers = () => {

    //<editor-fold desc="State">
    const [editMode, setEditMode] = useState(false);
    const [selectedBorrower, setSelectedBorrower] = useState(null);
    const {user} = useContext(UserDataContext);
    const [showAdd, setShowAdd] = useState(false);
    const {
        fetchApi: getBorrowers,
        data: borrowersData,
        error: borrowersError,
        isOK: borrowersIsOK
    } = useGet();
    const {
        fetchApi: updateBorrower,
        isOK: updateIsOK,
        error: updateError
    } = usePut();
    const { addNotification } = useNotifications();
    //</editor-fold>

    //<editor-fold desc="Use Effects">
    useEffect(() => {
        getBorrowers(Endpoints.BORROWER_ENDPOINT)
    }, [showAdd]);

    useEffect(() => {
        if(!editMode)
            getBorrowers(Endpoints.BORROWER_ENDPOINT)
    }, [editMode]);

    useEffect(() => {
        if (updateIsOK) {
            addNotification({
                type: 'success',
                header: 'לווה עודכן',
                message: `הלווה ${selectedBorrower.firstName} ${selectedBorrower.lastName} עודכן בהצלחה!`
            });
        }
    }, [updateIsOK]);

    useEffect(() => {
        if (updateError?.message) {
            addNotification({
                type: 'error',
                header: 'שגיאה בעדכון לווה',
                message: `חלה שגיאה בעדכון הלווה ${selectedBorrower.firstName} ${selectedBorrower.lastName} אנא נסה שנית`
            });
        }
    }, [updateError]);
    //</editor-fold>

    //<editor-fold desc="Actions">
    const saveChanges = () => {
        const path = Endpoints.BORROWER_ENDPOINT.addPath(selectedBorrower?.id);
        updateBorrower(path, selectedBorrower);
    }
    //</editor-fold>


    return (
        <div className="container-fluid secondary-bg-dark overflow-y-auto">
            <Row className="sticky-top secondary-bg-dark">
                <div className="d-flex justify-content-between">
                    <h1 className='py-3 pb-0 position-sticky z-2'>
                        {editMode ? `${selectedBorrower.firstName} ${selectedBorrower.lastName}` : 'לווים בתיק'}
                    </h1>
                    <NewBorrower show={showAdd} setShow={setShowAdd}/>
                    <div className="d-flex align-items-center">
                        {!editMode && (
                            <NewBorrowerButton setShowAdd={setShowAdd}/>
                        )}
                        {editMode && (
                            <CurrentBorrowerOption setEditMode={setEditMode}
                                                   onSave={saveChanges}/>
                        )}
                    </div>
                </div>
                <hr/>
            </Row>
            {!editMode && (
                <BorrowersTable borrowers={borrowersData}
                                setSelectedBorrower={setSelectedBorrower}
                                setEditMode={setEditMode}/>
            )}
            {editMode && (
                <EditBorrower borrower={selectedBorrower}
                              setBorrower={setSelectedBorrower}/>
            )}
        </div>
    )
}

export default PortalBorrowers;