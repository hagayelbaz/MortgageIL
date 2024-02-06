import React, {cloneElement, useState} from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';

const MultiStepForm = ({ children , onFormSubmit}) => {
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
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(formData);
        console.log(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <ProgressBar now={(step / totalSteps) * 100} />
            <div className="py-5">
                {cloneElement(children[step - 1], {
                    onInput: handleInputChange})
                }
            </div>
            <div className="d-flex justify-content-between">
                {step > 1 &&
                    <Button variant="secondary" onClick={handlePrevious}>הבא</Button>
                }
                {step < totalSteps ?
                    <Button variant="primary" onClick={handleNext}>הקודם</Button> :
                    <Button variant="primary" type="submit">Submit</Button>
                }
            </div>
        </Form>
    );
};

export default MultiStepForm;