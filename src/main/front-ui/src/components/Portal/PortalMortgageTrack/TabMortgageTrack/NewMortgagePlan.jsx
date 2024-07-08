import FormModal from "../../../FormModal/FormModal";
import Endpoints from "../../../../Classes/Endpoints";
import {Person2} from "@mui/icons-material";
import {useEffect} from "react";


const NewMortgagePlan = ({show, setShow, groupId}) => {

    const items = [
        {value: '1', label: 'קבועה לא צמודה'},
        {value: '2', label: 'קבועה צמודה'},
        {value: '3', label: 'פריים'},
        {value: '4', label: 'משתנה כל 5 שנים לא צמודה'},
        {value: '5', label: 'משתנה כל 2.5 שנים לא צמודה'},
        {value: '6', label: 'משתנה כל 10 שנים לא צמודה'},
        {value: '7', label: 'משתנה כל 5 שנים צמודה'},
        {value: '8', label: 'משתנה כל 2.5 שנים צמודה'},
        {value: '9', label: 'משתנה כל 10 שנים צמודה'},
        {value: '10', label: 'זכאות'},
        {value: '11', label: 'יורו'},
    ]

    const itemsStr = items.map(item => item.label);

    const fields = {
        title: "הוסף מסלול משכנתא חדש",
        buttonText: "שמור",
        data: [
            [
                {name: 'type', placeholder: 'שם המסלול', type: 'select', required: true, icon: Person2, items: itemsStr},
            ],
            [
                {name: 'amount', placeholder: 'סכום המשכנתא', type: 'number', required: true, icon: Person2},
            ],
            [
                {name: 'duration', placeholder: 'משך (בחודשים)', type: 'number', required: true, icon: Person2},
                {name: 'interestRate', placeholder: 'ריבית', type: 'number', required: true, icon: Person2},
            ],
            [
                {name: 'balloonDuration', placeholder: 'תקופת בלון (אם יש)', type: 'number', required: false, icon: Person2},
                {name: 'startDate', placeholder: 'תאריך התחלה', type: 'date', required: true, icon: Person2},
            ]
        ]
    }

    const initialData = {
        isNew: true,
        mortgageGroupId: groupId,
        type: '',
        amount: 0,
        duration: 0,
        interestRate: 0,
        balloonDuration: 0,
        startDate: new Date().toISOString().split('T')[0]
    }

    return (
        <FormModal endpoint={Endpoints.MORTGAGE_PLAN_ENDPOINT}
                   fields={fields}
                   show={show}
                   setShow={setShow}
                   initialData={initialData}
                   layoutClasses={[""]}
        />

    )
}

export default NewMortgagePlan;