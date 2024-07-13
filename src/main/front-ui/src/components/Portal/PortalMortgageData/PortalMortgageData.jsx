import FormViewer from "../../FormViewer/FormViewer";
import CustomInput from "../../CustomInput/CustomInput";
import {Person} from "@mui/icons-material";
import FormHeader from "../../FormHeader/FormHeader";
import './PortalMortgageData.css';
import useFormData from "../../../Hook/useFormData";
import Toggle from "../../Toggle/Toggle";
import CustomCheckBox from "../../CustomCheckBox/CustomCheckBox";
import {useEffect, useState} from "react";
import SaveIcon from "@mui/icons-material/Save";
import Help from "../../Help/Help";
import Endpoints from "../../../Classes/Endpoints";
import {useGet} from "../../../Classes/RequestHooks";

const initialData = {
    loanAmount: '',
    equity: '',
    numberOfApartments: '',
    intendsToSellWithin18Months: false,
    isFirstApartmentPurchase: false,
    isNew: true
}

const loanTypes = [
    "דירה",
    "מגרש",
    "בנייה עצמית",
    "מחזור",
    "כל מטרה",
]


const PortalMortgageData = () => {
    const [showNumberOfApartments, setShowNumberOfApartments] = useState(false);
    const [form, setForm] = useState(initialData);
    const {
        data,
        isLoading,
        fetchApi
    } = useGet();
    const {
        data: formData,
        updateData: updateForm,
        onChange: onFormChange,
        saveData: saveFormData
    } = useFormData(form, setForm, Endpoints.LOAN_DATA_ENDPOINT);


    const handleChange = (e) => {
        setShowNumberOfApartments(e.target.id === 'y');
    }

    const logSave = () => {
        saveFormData();
    }

    useEffect(() => {
        fetchApi(Endpoints.LOAN_DATA_ENDPOINT);
    }, []);

    useEffect(() => {
        if (data) {
            console.log(data);
            Object.keys(data).forEach(key => {
                updateForm(key, data[key]);
            });
            const isOwner = data?.numberOfApartments > 0;
            setShowNumberOfApartments(isOwner);
            document.getElementById(isOwner ? 'y' : 'n').checked = true;
        }
    }, [data])


    return (
        <div className="secondary-bg-dark container-fluid">
            <div className="d-flex align-items-center justify-content-between">
                <h1 className="mt-1 fs-2">פרטי הלוואה</h1>
                <Help text='שמור שינויים'>
                    <SaveIcon role="button"
                              onClick={logSave}
                              className="fs-2 mx-2"/>
                </Help>
            </div>
            <hr className="mt-0"/>
            <form className="shadow-lg p-2">
                <FormHeader title="פרטים כלליים" no="1"/>
                <div className="row">
                    <div className="col col-xl-6 d-flex align-items-center">
                        <span className="">סוג העסקה:</span>
                        <Toggle items={loanTypes}
                                value={formData.typeDescription}
                                name="loanType"
                                onChange={onFormChange}
                                className="mx-3"
                                defaultHeader="בחר את סוג העסקה"/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <CustomInput placeholder="סכום ההלוואה"
                                     value={formData.loanAmount} onChange={onFormChange}
                                     name="loanAmount" required type="number" icon={Person}/>
                    </div>
                    <div className="col-md-6">
                        <CustomInput placeholder="הון עצמי" value={formData.equity} required
                                     onChange={onFormChange} name="equity"
                                     type="number" icon={Person}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6">
                        <fieldset className="group-container">
                            <legend>האם בבעלותך דירה?</legend>
                            <CustomInput placeholder="כן" value={1}
                                         onChange={handleChange} name="ownOne"
                                         type="radio" id="y"/>
                            <CustomInput placeholder="לא" value={2}
                                         onChange={handleChange} name="ownOne"
                                         type="radio" id="n"/>
                            <div className={showNumberOfApartments ? 'd-none' : ''}>
                                <CustomInput placeholder="זו הדירה הראשונה שלי"
                                             value={formData.isFirstApartmentPurchase}
                                             onChange={onFormChange}
                                             name="isFirstApartmentPurchase"
                                             type="checkbox" id="isFirstApartmentPurchase"/>
                            </div>
                        </fieldset>
                    </div>
                    <div className={`col-md-6 ${showNumberOfApartments ? '' : 'd-none'}`}>
                        <fieldset className="group-container">
                            <legend>אנא ציין את מספר הדירות שבבעלותך</legend>
                            <CustomInput placeholder="מספר הדירות"
                                         value={formData.numberOfApartments}
                                         onChange={onFormChange} name="numberOfApartments"
                                         type="number" example="2"/>
                            <div className="mt-2">
                                <CustomInput placeholder="בכוונתי למכור בתוך 18 חודשים"
                                             value={formData.intendsToSellWithin18Months}
                                             type="checkbox" id="3"
                                             onChange={onFormChange} name="intendsToSellWithin18Months"/>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PortalMortgageData;