import React, {useEffect, useState} from "react";
import './LevelManager.css';
import validator from '@rjsf/validator-ajv8';
import ProgressBar from "../../ProgressBar/ProgressBar";
import CustomForm from "./CustomiseWidgets/CustomiseWidgets";
import useSchema from "../../../Hook/useSchema";
import transformErrors from "./errorMessages/transformErrors";
import {Vars} from "../../../Vars";


const LevelManager = ({levels}) => {
    const [formData, setFormData] = useState({
        borrowers: [{firstName: ""}],//to show as default
        borrowerLiabilities: [{description: ""}],
    });
    const {next, prev, getSchema} = useSchema(levels, 0);
    const schema = getSchema();

    const onNext = () => {
        if (schema.currentIndex === schema.totalSteps)
            console.log(formData);//TODO: send data to server
        else
            next(formData);
    }
    const onPrevious = () => prev(formData);

    return (
        <div className="secondary-bg p-3 m-0 text-light rounded-2">
            <ProgressBar totalSteps={schema.totalSteps} className="mb-3"
                         color={Vars.ACCENT_COLOR_DARK}
                         currentStep={schema.currentIndex}/>

            <CustomForm schema={schema.level} formData={formData}
                        transformErrors={transformErrors}
                        onSubmit={onNext} validator={validator}
                        onChange={(e) => setFormData(e.formData)}>

                <div className="d-flex justify-content-between mt-3">
                    <button type="button" className="btn secondary-bg-light text-light px-4"
                            onClick={onPrevious} disabled={schema.currentIndex === 0}>
                        הקודם
                    </button>
                    <button type="submit" className="btn secondary-bg-light text-light px-4">
                        {schema.currentIndex === schema.totalSteps ? 'שליחה' : 'הבא'}
                    </button>
                </div>

            </CustomForm>
        </div>
    );
};

export default LevelManager;