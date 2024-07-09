import {useEffect, useState} from "react";
import useFormData from "../../Hook/useFormData";
import {Button, Modal} from "react-bootstrap";
import CustomInput from "../CustomInput/CustomInput";

//TODO: handle select input!
const FormModal = ({show, setShow, initialData, fields, endpoint, layoutClasses}) => {
    const [formData, setFormData] = useState(initialData);
    const {
        data,
        updateData,
        onChange,
        saveData,
        setDataFromProps
    } = useFormData(formData, setFormData, endpoint);

    useEffect(() => {
        setDataFromProps(initialData);
    }, [initialData]);


    const handleClose = () => setShow(false);

    const handleSave = (e) => {
        e.preventDefault();
        saveData();
        handleClose();
    }

    return (
        <Modal show={show}
               className="text-light"
               onHide={handleClose}>
            <div className="secondary-bg rounded-2 border-2 border-secondary p-2">
                <header className="d-flex justify-content-between align-items-center">
                    <h2>{fields.title}</h2>
                    <Button variant="danger" onClick={handleClose}>X</Button>
                </header>
                <hr/>
                <form className="py-2 container-fluid m-0 px-0" onSubmit={handleSave}>
                    {fields.data.map((fieldGroup, index) => (
                        <div className={`row my-2 ${layoutClasses[index]}`} key={index}>
                            {fieldGroup.map((field) => (
                                <div className="col" key={field.name}>
                                    <CustomInput
                                        placeholder={field.placeholder}
                                        value={data[field.name]}
                                        example={field?.example}
                                        type={field.type}
                                        required={field.required}
                                        icon={field.icon}
                                        name={field.name}
                                        onChange={onChange}
                                        {...field}/>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button type="submit"
                            className="btn text-light border-secondary secondary-bg-light d-flex justify-content-center w-100">
                        {fields.buttonText}
                    </button>
                </form>
            </div>
        </Modal>
    );
}

export default FormModal;