import {useContext, useRef} from "react";
import {UserDataContext} from "../../../Provider/UserDataProvider";
import FormHeader from "../../FormHeader/FormHeader";
import FormViewer from "../../FormViewer/FormViewer";
import Endpoints from "../../../Classes/Endpoints";
import SaveIcon from "@mui/icons-material/Save";
import Help from "../../Help/Help";

const userFields = {
    data: [
        [
            {name: "firstName", placeholder: "שם פרטי", type: "text", required: true},
            {name: "lastName", placeholder: "שם משפחה", type: "text", required: true},
        ],
        [
            {name: "id", placeholder: "מספר משתמש", type: "text", required: true, disabled: true},
            {name: "email", placeholder: "דואר אלקטרוני", type: "email", required: true, disabled: true},
            {name: "phone", placeholder: "טלפון", type: "text", required: true}
        ],
        [
            {name: "address", placeholder: "כתובת", type: "text", required: true},
            {name: "city", placeholder: "עיר", type: "text", required: true},
        ]
    ]
}

const PortalPersonalData = () => {
    const {user} = useContext(UserDataContext);
    const formRef = useRef();

    const handleSave = () => {
        if(formRef.current) {
            formRef.current.saveData();
        }
    }


    return (
        <div className="container-fluid secondary-bg-dark p-2">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>{user?.firstName} {user?.lastName}</h1>
                    <Help text='שמור שינויים'>
                        <SaveIcon role="button"
                                  onClick={handleSave}
                                  className="fs-2 mx-2"/>
                    </Help>
                </div>
                <hr/>
                <div className="row">
                    <FormHeader title="פרטים אישיים" no={1}/>
                </div>
                <div className="row">
                    <FormViewer endpoint={Endpoints.USER_ENDPOINT}
                                initialData={{...user}}
                                ref={formRef}
                                fields={userFields}
                                layoutClasses={[""]}/>
                </div>
            </div>
        </div>
    )
}

export default PortalPersonalData;