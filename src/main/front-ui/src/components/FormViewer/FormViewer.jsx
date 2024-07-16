import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import useFormData from "../../Hook/useFormData";
import {Button, Modal} from "react-bootstrap";
import CustomInput from "../CustomInput/CustomInput";
import FormHeader from "../FormHeader/FormHeader";

const FormViewer = forwardRef(({ initialData, fields, endpoint, layoutClasses , allowSections = false}, ref) => {
    const [formData, setFormData] = useState(initialData);
    const sectionIndex = useRef(1);
    const {
        data,
        updateData,
        onChange,
        saveData,
        setDataFromProps
    } = useFormData(formData, setFormData, endpoint);

    useImperativeHandle(ref, () => ({saveData: saveData}));

    useEffect(() => {
        setDataFromProps(initialData);
    }, [initialData]);

    const handleSave = (e) => {
        e.preventDefault();
        saveData();
    }

    const getAndIncrementSectionIndex = () => {
        return sectionIndex.current++;
    }


    return (
        <div className="">
            <hr/>
            <form className="py-2 container-fluid m-0 px-0">
                {fields?.data.map((fieldGroup, index) => (
                    <div className={`row my-2 ${layoutClasses[index]}`} key={index}>
                        {
                            allowSections && fields?.headers[index] &&
                            <FormHeader title={fields?.headers[index]} no={getAndIncrementSectionIndex()}/>
                        }
                        {fieldGroup.map((field) => (
                            <div className="col mb-2" key={field?.name}>
                                <CustomInput
                                    placeholder={field?.placeholder}
                                    value={data[field?.name]}
                                    example={field?.example}
                                    type={field?.type}
                                    required={field?.required}
                                    icon={field?.icon}
                                    name={field?.name}
                                    onChange={onChange}
                                    {...field}/>
                            </div>
                        ))}
                    </div>
                ))}
            </form>
        </div>
    );
});

export default FormViewer;