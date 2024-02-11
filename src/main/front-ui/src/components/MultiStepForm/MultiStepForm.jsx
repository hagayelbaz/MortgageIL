import React, {cloneElement, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import ProgressBar from "../ProgressBar/ProgressBar";
import LevelSelectButton from "../LevelSelectButton/LevelSelectButton";
import LevelSelectButtonContainer from "../LevelSelectButtonContainer/LevelSelectButtonContainer";

const MultiStepForm = ({children, onFormSubmit}) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const steps = React.Children.toArray(children);
    const totalSteps = steps.length;

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const handlePrevious = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(formData);
        console.log(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <LevelSelectButtonContainer>
                <LevelSelectButton label={"דירה"} bootstrapIcon={'bi-house'}/>
                <LevelSelectButton label={"נכס להשקעה"} bootstrapIcon={'bi-house-add'}/>
                <LevelSelectButton label={"טוב כבר פה אין מה לכתוב"} bootstrapIcon={'bi-house-add'}/>
            </LevelSelectButtonContainer>
            <div className="py-5">
                {cloneElement(children[step - 1], {
                    onInput: handleInputChange
                })
                }
            </div>
            <div className="d-flex justify-content-between">
                {step > 1 &&
                    <Button variant="secondary" onClick={handlePrevious}>הקודם</Button>
                }
                {step < totalSteps ?
                    <Button variant="primary" onClick={handleNext}>הבא</Button> :
                    <Button variant="primary" type="submit">Submit</Button>
                }
            </div>

            <ProgressBar currentStep={step} totalSteps={totalSteps}/>
        </Form>
    );
};

export default MultiStepForm;