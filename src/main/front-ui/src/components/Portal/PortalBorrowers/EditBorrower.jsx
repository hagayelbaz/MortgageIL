import {Accordion, Col, Row} from "react-bootstrap";
import FormHeader from "../../FormHeader/FormHeader";
import CustomInput from "../../CustomInput/CustomInput";
import {Person} from "@mui/icons-material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useFormData from "../../../Hook/useFormData";
import {usePut} from "../../../Classes/RequestHooks";
import Endpoints from "../../../Classes/Endpoints";
import {forwardRef, useContext, useImperativeHandle} from "react";
import {UserDataContext} from "../../../Provider/UserDataProvider";


const EditBorrower = forwardRef(({ borrower, setBorrower }, ref) => {
    const {
        data: borrowerData,
        updateData: setBorrowerForm,
        onChange,
        saveData: saveBorrower
    } = useFormData(borrower, setBorrower, Endpoints.BORROWER_ENDPOINT);

    useImperativeHandle(ref, () => ({
        saveBorrower
    }));

    const addSalary = () => {
        const newSalary = {
            person: {
                id:  borrowerData?.id,
            },
            employer: '',
            description: '',
            startDate: '',
            salary: '',
            isNew: true
        };
        setBorrowerForm(`salaries.${borrowerData?.salaries?.length}`, newSalary);
    };


    return (
        <div className="container-fluid p-0 col-8 mb-5">
            <Row className="mb-2">
                <FormHeader title="פרטים אישיים" no={1}/>
            </Row>
            <Row>
                <Col>
                    <CustomInput placeholder="שם פרטי"
                                 value={borrowerData?.firstName}
                                 icon={Person}
                                 name="firstName"
                                 onChange={onChange}/>
                </Col>
                <Col>
                    <CustomInput placeholder="שם משפחה"
                                 value={borrowerData?.lastName}
                                 icon={Person}
                                 name="lastName"
                                 onChange={onChange}/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <CustomInput placeholder="מספר ת.ז."
                                 value={borrowerData?.id}
                                 disabled
                                 icon={Person}
                                 name="id"
                                 onChange={onChange}/>
                </Col>
                <Col>
                    <CustomInput placeholder="טלפון"
                                 value={borrowerData?.phoneNumber}
                                 icon={SmartphoneIcon}
                                 name="phoneNumber"
                                 onChange={onChange}/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <CustomInput placeholder="אימייל"
                                 value={borrowerData?.email}
                                 icon={EmailIcon}
                                 name="email"
                                 onChange={onChange}/>
                </Col>
            </Row>

            <Row className="mt-4 d-flex justify-content-between">
                <FormHeader title="הכנסות" no={3}>
                    <AddCircleIcon role="button"
                                   onClick={addSalary}
                                   className="fs-3 mx-2"/>
                </FormHeader>
            </Row>
            <Accordion className="" defaultActiveKey="0" flush>
                {borrowerData?.salaries.map((salary, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>
                            <h5 className="fw-light">
                                <span className="muted-text">{index + 1}. &nbsp;</span>
                                <span>{salary?.employer}</span>
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row className="mt-4">
                                <Col>
                                    <CustomInput placeholder="תיאור" value={salary?.description}
                                                 name={`salaries.${index}.description`}
                                                 icon={Person} onChange={onChange}/>
                                </Col>
                                <Col>
                                    <CustomInput placeholder="תחילת עבודה" value={salary?.startDate}
                                                 name={`salaries.${index}.startDate`}
                                                 type="date"
                                                 icon={Person} onChange={onChange}/>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col>
                                    <CustomInput placeholder="מעסיק" value={salary?.employer}
                                                 name={`salaries.${index}.employer`}
                                                 icon={Person} onChange={onChange}/>
                                </Col>
                                <Col>
                                    <CustomInput placeholder="סכום" value={salary?.salary}
                                                 name={`salaries.${index}.salary`}
                                                 icon={Person} onChange={onChange}/>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
})

export default EditBorrower;