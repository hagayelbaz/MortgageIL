import FormModal from "../../../FormModal/FormModal";
import Endpoints from "../../../../Classes/Endpoints";
import {Person2} from "@mui/icons-material";


const NewMortgageGroup = ({show, setShow}) => {

    const fields = {
        title: "הוספה של הצעה חדשה",
        buttonText: "שמור",
        data: [
            [
                {name: 'groupName', example: "מזרחי טפחות", placeholder: 'שם ההצעה', type: 'text', required: true, icon: Person2},
            ]
        ]
    }

    const initialData = {
        groupName: '',
        isNew: true
    }

    return (
        <FormModal endpoint={Endpoints.MORTGAGE_GROUP_ENDPOINT}
                   fields={fields}
                   show={show}
                   setShow={setShow}
                   initialData={initialData}
                   layoutClasses={[""]}
        />

    )
}

export default NewMortgageGroup;