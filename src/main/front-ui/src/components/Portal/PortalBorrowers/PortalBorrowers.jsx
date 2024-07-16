import './PortalBorrowers.css';
import {Row} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import NewBorrower from "./NewBorrower";
import {useDelete, useGet} from "../../../Classes/RequestHooks";
import Endpoints from "../../../Classes/Endpoints";
import EditBorrower from "./EditBorrower";
import BorrowersTable from "./BorrowersTable";
import NewBorrowerButton from "./NewBorrowerButton";
import CurrentBorrowerOption from "./CurrentBorrowerOption";
import {useNotifications} from "../../../Provider/NotificationProvider";

const successDeleteNotification = {
    header: 'הלווה נמחק בהצלחה',
    message: 'הלווה נמחק בהצלחה מהמערכת',
    type: 'success'
}

const errorDeleteNotification = {
    header: 'מחיקת לווה נכשלה',
    message: 'מחיקת לווה נכשלה, אנא נסה שוב',
    type: 'error'
}

const PortalBorrowers = () => {
    //<editor-fold desc="State">
    const [editMode, setEditMode] = useState(false);
    const [selectedBorrower, setSelectedBorrower] = useState(null);
    const [showAdd, setShowAdd] = useState(false);
    const {addNotification} = useNotifications();
    const borrowerRef = useRef();
    const {fetchApi: getBorrowers, data: borrowersData, error: borrowersError} = useGet();
    const {fetchApi: deleteBorrower, error: deleteError, isOK: deletionOk} = useDelete();
    //</editor-fold>

    //<editor-fold desc="Use Effects">
    useEffect(() => {
        getBorrowers(Endpoints.BORROWER_ENDPOINT)
    }, [editMode, showAdd]);

    useEffect(() => {
        if (deleteError) {
            addNotification(errorDeleteNotification);
        } if (deletionOk) {
            addNotification(successDeleteNotification);
        }
    }, [deleteError, deletionOk]);

    //</editor-fold>

    //<editor-fold desc="Actions">
    const handleSave = () => {
        if (borrowerRef.current) {
            borrowerRef.current.saveBorrower();
        }
    };
    const handleDelete = () => {
        deleteBorrower(Endpoints.BORROWER_ENDPOINT.addPath(selectedBorrower.id));
        setEditMode(false);
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
                                                   onDelete={handleDelete}
                                                   onSave={handleSave}/>
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
                              ref={borrowerRef}
                              setBorrower={setSelectedBorrower}/>
            )}
        </div>
    )
}

export default PortalBorrowers;