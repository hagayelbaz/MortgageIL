import {Button, Modal} from "react-bootstrap";
import CustomInput from "../../CustomInput/CustomInput";
import {useEffect, useRef, useState} from "react";
import {Person} from "@mui/icons-material";
import Endpoints from "../../../Classes/Endpoints";
import useFormData from "../../../Hook/useFormData";


const NewBorrower = ({show, setShow}) => {
    //<editor-fold desc="State">
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        isNew: true
    });
    const {
        data: borrowerData,
        updateData: setBorrowerForm,
        onChange: changesHandler,
        saveData: saveBorrower
    } = useFormData(formData, setFormData, Endpoints.BORROWER_ENDPOINT);

    //</editor-fold>

    const handleClose = () => setShow(false);

    const handleSave = (e) => {
        e.preventDefault();
        saveBorrower();
    }



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
                            <CustomInput placeholder="שם פרטי" value={borrowerData.firstName}
                                         required={true}
                                         icon={Person} name="firstName" onChange={changesHandler}/>
                        </div>
                        <div className="col">
                            <CustomInput placeholder="שם משפחה" value={borrowerData.lastName}
                                         required={true}
                                         icon={Person} name="lastName" onChange={changesHandler}/>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <CustomInput placeholder="אימייל" value={borrowerData.email}
                                         type={'email'} required={true}
                                         icon={Person} name="email" onChange={changesHandler}/>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <CustomInput placeholder="טלפון" value={borrowerData.phoneNumber}
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