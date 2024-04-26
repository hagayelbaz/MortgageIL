import './PortalBorrowers.css';
import CustomTable from "../../CustomTable/CustomTable";
import {colData, colData2, table2, tableData, userData} from "../../../Classes/TestData";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from '@mui/icons-material/Edit';
import {Accordion, Col, Row} from "react-bootstrap";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Help from "../../Help/Help";
import {useState} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SaveIcon from '@mui/icons-material/Save';
import CustomInput from "../../CustomInput/CustomInput";
import {Person} from "@mui/icons-material";
import FormHeader from "../../FormHeader/FormHeader";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';


const PortalBorrowers = () => {
    const [editMode, setEditMode] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const getUserData = (id) => {
        //TODO: get user data from server
        return userData;
    }

    const optionClick = (usr) => {
        setSelectedUser(getUserData(usr.id));
        setEditMode(true);
    }

    const changesHandler = (e) => {
        setSelectedUser({
            ...selectedUser,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="container-fluid secondary-bg-dark overflow-y-auto">
            <Row className="sticky-top secondary-bg-dark">
                <div className="d-flex justify-content-between">
                    <h1 className='py-3 pb-0 position-sticky z-2'>
                        {editMode ? `${selectedUser.firstName} ${selectedUser.lastName}` : 'לווים בתיק'}
                    </h1>
                    <div className="d-flex align-items-center">
                        {!editMode && (
                            <Help text='לחץ ליצירת לווה חדש'>
                                <AddCircleIcon role="button" className="fs-3 mx-2"/>
                            </Help>
                        )}
                        <MoreVertIcon role="button" className="fs-3 mx-2"/>
                        {editMode && (
                            <>
                                <Help text='שמור שינויים'>
                                    <SaveIcon role="button" className="fs-3 mx-2"/>
                                </Help>
                                <Help text='חזרה לרשימת לווים'>
                                    <ArrowBackIosIcon role="button" className="fs-3 mx-2"
                                                      onClick={() => setEditMode(false)}/>
                                </Help>
                            </>
                        )}
                    </div>
                </div>
                <hr/>
            </Row>
            {!editMode && (
                <Row>
                    <CustomTable data={table2}
                                 columns={colData2}
                                 spacialIcon={(usr) => (
                                     <Help text="לחץ על עריכה כדי לערוך את פרטי הלקוח">
                                         <EditIcon role="button"
                                                   className="p-0 mx-1"
                                                   onClick={() => optionClick(usr)}/>
                                     </Help>
                                 )}
                                 tableStyle={{maxHeight: '65dvh'}}/>
                </Row>
            )}
            {editMode && (
                <div className="container-fluid p-0 col-8 mb-5">
                    <Row className="mb-2">
                        <FormHeader title="פרטים אישיים" no={1}/>
                    </Row>
                    <Row>
                        <Col>
                            <CustomInput placeholder="שם פרטי" value={selectedUser.firstName}
                                         icon={Person} name="firstName" onChange={changesHandler}/>
                        </Col>
                        <Col>
                            <CustomInput placeholder="שם משפחה" value={selectedUser.lastName}
                                         icon={Person} name="lastName" onChange={changesHandler}/>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <CustomInput placeholder="מספר ת.ז." value={selectedUser.id}
                                         disabled
                                         icon={Person} name="id" onChange={changesHandler}/>
                        </Col>
                        <Col>
                            <CustomInput placeholder="טלפון" value={selectedUser.phoneNumber}
                                         icon={SmartphoneIcon} name="phone" onChange={changesHandler}/>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <CustomInput placeholder="אימייל" value={selectedUser.email}
                                         icon={EmailIcon} name="email" onChange={changesHandler}/>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <FormHeader title="הכנסות" no={3}/>
                    </Row>
                    <Accordion className="" defaultActiveKey="0" flush>
                        {selectedUser.incomes.map((income, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header>
                                    <h5 className="fw-light">
                                        <span className="muted-text">{index + 1}. &nbsp;</span>
                                        <span>{income.employer}</span>
                                    </h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row className="mt-4">
                                        <Col>
                                            <CustomInput placeholder="תיאור" value={income.type}
                                                         icon={Person} name="type" onChange={changesHandler}/>
                                        </Col>
                                        <Col>
                                            <CustomInput placeholder="תחילת עבודה" value={income.date}
                                                         icon={Person} name="date" onChange={changesHandler}/>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            <CustomInput placeholder="מעסיק" value={income.employer}
                                                         icon={Person} name="employer" onChange={changesHandler}/>
                                        </Col>
                                        <Col>
                                            <CustomInput placeholder="סכום" value={income.amount}
                                                         icon={Person} name="amount" onChange={changesHandler}/>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            )}
        </div>
    )
}

export default PortalBorrowers;