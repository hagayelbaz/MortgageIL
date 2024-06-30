import {Button, Modal} from "react-bootstrap";
import CustomInput from "../../CustomInput/CustomInput";
import {useEffect, useState} from "react";
import {Person} from "@mui/icons-material";
import {useGet, usePost} from "../../../Classes/RequestHooks";
import Endpoints from "../../../Classes/Endpoints";
import {useNotifications} from "../../../Provider/NotificationProvider";


const NewBorrower = ({show, setShow}) => {
    //<editor-fold desc="State">
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });
    const {
        fetchApi : postBorrower,
        data: borrowerData,
        error: borrowerError,
        isOK: borrowerIsOK
    } = usePost();

    const { addNotification } = useNotifications();
    const handleClose = () => setShow(false);
    //</editor-fold>

    //<editor-fold desc="Data Handlers">
    const handleSave = (e) => {
        e.preventDefault();
        postBorrower(Endpoints.BORROWER_ENDPOINT, formData);
    }

    const changesHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    //</editor-fold>

    //<editor-fold desc="Handle Messages">
    useEffect(() => {
        if (borrowerIsOK) {
            addNotification({
                type: 'success',
                header: 'לווה נוסף בהצלחה!',
                message: `הוספנו את ${formData.firstName} ${formData.lastName} לרשימת הלווים!`
            });
            handleClose();
        }
    }, [borrowerIsOK]);

    useEffect(() => {
        if (borrowerError?.message) {
            addNotification({
                type: 'error',
                header: 'שגיאה בהוספת לווה',
                message: `חלה שגיאה בהוספת הלווה ${formData.firstName} ${formData.lastName}אנא נסה שנית`
            });
            handleClose();
        }
    }, [borrowerError]);
    //</editor-fold>



    return (
        <Modal show={show}
               className="text-light"
               onHide={handleClose}>
            <div className="secondary-bg rounded-2 border-2 border-secondary p-2">
                <header className="d-flex justify-content-between align-items-center">
                    <h2>הוספת לווה חדש</h2>
                    <Button variant="danger" onClick={handleClose}>X</Button>
                </header>

                <form className="p-3 container-fluid">
                    <div className="row my-2">
                        <div className="col">
                            <CustomInput placeholder="שם פרטי" value={formData.firstName}
                                         required={true}
                                         icon={Person} name="firstName" onChange={changesHandler}/>
                        </div>
                        <div className="col">
                            <CustomInput placeholder="שם משפחה" value={formData.lastName}
                                         required={true}
                                         icon={Person} name="lastName" onChange={changesHandler}/>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <CustomInput placeholder="אימייל" value={formData.email}
                                         type={'email'} required={true}
                                         icon={Person} name="email" onChange={changesHandler}/>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <CustomInput placeholder="טלפון" value={formData.phoneNumber}
                                         type={'tel'} required={true}
                                         icon={Person} name="phoneNumber" onChange={changesHandler}/>
                        </div>
                    </div>
                    <button type="submit"
                            onClick={handleSave}
                            className="btn text-light border-secondary secondary-bg-light d-flex justify-content-center w-100">
                        הוסף לווה
                    </button>
                </form>
            </div>
        </Modal>
    )
}

export default NewBorrower;