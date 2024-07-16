import FormViewer from "../../FormViewer/FormViewer";
import CustomInput from "../../CustomInput/CustomInput";
import {BusinessSharp, MergeType, Money, Percent, Person, TypeSpecimen} from "@mui/icons-material";
import FormHeader from "../../FormHeader/FormHeader";
import './PortalMortgageData.css';
import useFormData from "../../../Hook/useFormData";
import Toggle from "../../Toggle/Toggle";
import {useEffect, useState} from "react";
import SaveIcon from "@mui/icons-material/Save";
import Help from "../../Help/Help";
import Endpoints from "../../../Classes/Endpoints";
import {useGet} from "../../../Classes/RequestHooks";
import Card from "../PortalHome/Cards/Card/Card";
import {toNis, toPercentage} from "../../../Classes/StringUtils";
import SimpleCard from "../../SimpleCard/SimpleCard";

const initialData = {
    loanType: '',
    loanAmount: '',
    equity: '',
    numberOfApartments: '',
    intendsToSellWithin18Months: false,
    isFirstApartmentPurchase: false,
    isPerOccupantApartment: false,
    apartmentPrice: '',
    marketPrice: '',
    contractPrice: '',
    earlyRepayment: '',
    earlyRepaymentDate: '',
    city: '',
    typeDescription: '',
    isNew: true
}

const loanTypes = [
    'דירה',
    'מגרש',
    'בנייה עצמית',
    'מחזור',
    'כל מטרה'
]


const PortalMortgageData = () => {
    //<editor-fold desc="State">
    const [isOwner, setIsOwner] = useState(false);
    const [selectedType, setSelectedType] = useState('');
    const [form, setForm] = useState(initialData);
    const {data, isLoading, fetchApi} = useGet();
    const {
        data: formData,
        updateData: updateForm,
        onChange: onFormChange,
        saveData: saveFormData
    } = useFormData(form, setForm, Endpoints.LOAN_DATA_ENDPOINT);
    //</editor-fold>

    const handleChange = (e) => {
        setIsOwner(e.target.id === 'y');
        if(e.target.id === 'y'){
            updateForm('isFirstApartmentPurchase', false);
            updateForm('isPerOccupantApartment', false);
        }
        if(e.target.id === 'n'){
            updateForm('numberOfApartments', 0);
            updateForm('intendsToSellWithin18Months', false);
        }
    }

    const isEnablePerOccupantApartment = () => {
        return formData?.isFirstApartmentPurchase && !isOwner;
    }

    const isOccupantApartment = () => {
        return formData?.isPerOccupantApartment && isEnablePerOccupantApartment();
    }


    useEffect(() => {
        if (!isNaN(formData.loanType)) {
            setSelectedType(loanTypes[formData.loanType]);
        }
        if (formData.numberOfApartments > 0) {
            setIsOwner(true);
        }
    }, [formData]);

    useEffect(() => {
        fetchApi(Endpoints.LOAN_DATA_ENDPOINT);
    }, []);

    useEffect(() => {
        if (data) {
            Object.keys(data).forEach(key => updateForm(key, data[key]));
            document.getElementById(formData?.numberOfApartments ? 'y' : 'n').checked = true;
            setSelectedType(data?.typeDescription);
            updateForm('isNew', false);
        }
    }, [data])


    return (
        <div className="secondary-bg-dark container-fluid d-flex flex-column vh-100">
            <div className="row flex-shrink-0">
                <div className="d-flex align-items-center justify-content-between py-2">
                    <h1 className="mt-1 fs-2">פרטי עסקה</h1>
                    <Help text='שמור שינויים'>
                        <SaveIcon role="button"
                                  onClick={() => saveFormData(true)}
                                  className="fs-2 mx-2"/>
                    </Help>
                </div>
            </div>
            <hr className="mt-0 flex-shrink-0"/>
            <form className="row flex-grow-1 overflow-auto p-2">
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col m-0 p-0">
                            <div className="shadow-strong secondary-bg mx-2 rounded-3 p-1">
                                <div className="row">
                                    <SimpleCard header={'סך הלוואה'}
                                                className="col"
                                                iconColor="#0054c855"
                                                value={toNis(formData?.loanAmount)}
                                                icon={<Money/>}/>
                                    <SimpleCard header={'שיעור מימון'}
                                                className="col"
                                                iconColor="#9422e455"
                                                value={toPercentage(formData?.loanAmount / formData?.apartmentPrice * 100)}
                                                icon={<Percent/>}/>
                                    <SimpleCard header={'סוג עסקה'}
                                                className="col"
                                                iconColor="#ffab0055"
                                                value={selectedType}
                                                icon={<BusinessSharp/>}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col shadow-strong secondary-bg mx-2 rounded-3 py-3">
                            <FormHeader title="פרטים כלליים" no="1" help="שמור שינויים"/>
                            <div className="my-3 d-flex align-items-center">
                                <span className="ms-3">סוג העסקה:</span>
                                <Toggle items={loanTypes}
                                        value={formData.typeDescription}
                                        name="loanType"
                                        onChange={onFormChange}
                                        className="w-100"
                                        defaultHeader="בחר את סוג העסקה"/>
                            </div>
                            <CustomInput placeholder="עיר"
                                         className="my-3"
                                         value={formData.city} onChange={onFormChange}
                                         name="city" type="text" icon={Person}/>
                            <CustomInput placeholder="מחיר הנכס"
                                         className="my-3"
                                         value={formData.apartmentPrice} onChange={onFormChange}
                                         name="apartmentPrice" type="text" icon={Person}/>
                            <div className="row my-3">
                                <div className="col">
                                    <CustomInput placeholder="סכום הלוואה"
                                                 value={formData.loanAmount} onChange={onFormChange}
                                                 name="loanAmount" type="number" icon={Person}/>
                                </div>
                                <div className="col">
                                    <CustomInput placeholder="הון עצמי" value={formData.equity}
                                                 onChange={onFormChange} name="equity"
                                                 type="number" icon={Person}/>
                                </div>
                            </div>
                        </div>
                        <div className="col shadow-strong secondary-bg col-xl-4 mx-2 rounded-3 py-3">
                            <FormHeader title="פרעון מוקדם" no="2"
                                        help="אם יש צפי לפרעון מוקדם ניתן להזין כאן, אין צורך להזין תאריך, אך זה יעזור לנו לשפר את ההצעות."/>
                            <CustomInput placeholder="סכום הפרעון"
                                         className="my-3"
                                         value={formData.earlyRepayment}
                                         onChange={onFormChange} name="earlyRepayment"
                                         type="number" icon={Person}/>
                            <CustomInput placeholder="תאריך פרעון"
                                         value={formData.earlyRepaymentDate}
                                         className="my-3"
                                         onChange={onFormChange} name="earlyRepaymentDate"
                                         type="date" icon={Person}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <fieldset className="col-4 shadow-strong secondary-bg mx-2 rounded-3 py-3">
                            <FormHeader title="נכסים קיימים" no="3"/>
                            <CustomInput placeholder="כן" value={1}
                                         className="my-3"
                                         checked={isOwner}
                                         onChange={handleChange} name="ownOne"
                                         type="radio" id="y"/>
                            <CustomInput placeholder="לא" value={2}
                                         className="my-3"
                                         checked={!isOwner}
                                         onChange={handleChange} name="ownOne"
                                         type="radio" id="n"/>
                            <CustomInput placeholder="זו הדירה הראשונה שלי"
                                         checked={formData.isFirstApartmentPurchase}
                                         className={isOwner ? 'd-none my-3' : 'my-3'}
                                         onChange={onFormChange}
                                         name="isFirstApartmentPurchase"
                                         type="checkbox" id="isFirstApartmentPurchase"/>
                            <CustomInput placeholder="האם מדובר במחיר למשתכן?"
                                         checked={formData.isPerOccupantApartment}
                                         className={isEnablePerOccupantApartment() ? 'my-3' : 'd-none my-3'}
                                         onChange={onFormChange}
                                         name="isPerOccupantApartment"
                                         type="checkbox" id="isPerOccupantApartment"/>
                        </fieldset>
                        <fieldset
                            className={`col shadow-strong secondary-bg mx-2 rounded-3 py-3 ${isOwner ? '' : 'd-none'}`}>
                            <FormHeader title="פרטי נכסים" no="4"/>
                            <CustomInput placeholder="מספר הדירות"
                                         value={formData.numberOfApartments}
                                         className="my-3"
                                         onChange={onFormChange} name="numberOfApartments"
                                         type="number" example="2"/>
                            <CustomInput placeholder="בכוונתי למכור בתוך 18 חודשים"
                                         checked={formData.intendsToSellWithin18Months}
                                         type="checkbox" id="3"
                                         className="my-3"
                                         onChange={onFormChange} name="intendsToSellWithin18Months"/>
                        </fieldset>
                        <div
                            className={`col shadow-strong secondary-bg mx-2 rounded-3 py-3 ${isOccupantApartment() ? '' : 'd-none'}`}>
                            <FormHeader title="מחיר למשתכן" no="4"/>
                            <CustomInput placeholder="מחיר שוק"
                                         value={formData.marketPrice}
                                         className="my-3"
                                         onChange={onFormChange} name="marketPrice"
                                         type="number" icon={Person}/>
                            <CustomInput placeholder="מחיר חוזה"
                                         value={formData.contractPrice}
                                         className="my-3"
                                         onChange={onFormChange} name="contractPrice"
                                         type="number" icon={Person}/>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default PortalMortgageData;