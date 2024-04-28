import './TabMortgageTrack.css';
import CustomTable from "../../../CustomTable/CustomTable";
import {Person} from "@mui/icons-material";
import {mortgageTracksCols} from "../../../../Classes/TestData";
import EditIcon from "@mui/icons-material/Edit";
import Help from "../../../Help/Help";
import {Button, Modal, Row} from "react-bootstrap";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ProgressBar from "../../../ProgressBar/ProgressBar";
import {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import CustomInput from "../../../CustomInput/CustomInput";

const TabMortgageTrack = ({mortgageTracks}) => {
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const handleEdit = (id) => {
        setEditMode(true);
        setEditId(id);
    }

    const handleClose = () => {
        setEditMode(false);
    }

    return (
        <div className="container-fluid">
            <Row>
                <div className="col col-xl-3">
                    <p className="mb-2 small muted-text">שיעור מימון</p>
                    <ProgressBar currentStep={60} color="#22CC00" totalSteps={100}/>
                </div>
                <div className="col col-xl-3">
                    <p className="mb-2 small muted-text">יחס החזר</p>
                    <ProgressBar currentStep={30} color="#55AA00" totalSteps={100}/>
                </div>
                <div className="col col-xl-6 d-flex justify-content-end align-items-center">
                    <Help text="הוספת מסלול">
                        <AddCircleIcon className="m-0 mx-2 fs-2" role="button"/>
                    </Help>
                </div>
            </Row>
            <hr/>
            <Row>
                <CustomTable data={mortgageTracks} columns={mortgageTracksCols}
                             tableStyle={{maxHeight: "60dvh"}}
                             spacialIcon={(item) => (
                                 <Help text="עריכת מסלול">
                                     <EditIcon className="m-0 mx-2" role="button"
                                               onClick={() => handleEdit(item.id)}/>
                                 </Help>
                             )}/>
            </Row>

            <Modal show={editMode} onHide={handleClose} >
                <Modal.Header className="secondary-bg text-light">
                    <h3 className="">מסלול חדש</h3>
                    <CloseIcon className="m-0 mx-2" role="button" onClick={handleClose}/>
                </Modal.Header>
                <Modal.Body className="secondary-bg text-light">
                    <div className="container-fluid">
                        <div className="row">
                            <CustomInput />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="secondary-bg text-light">
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default TabMortgageTrack;