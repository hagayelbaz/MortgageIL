import './CustomInput.css';
import {useEffect, useId, useState} from "react";
import Toggle from "../Toggle/Toggle";


const CustomInput = ({
                         placeholder,
                         value,
                         required,
                         onChange,
                         name,
                         icon: Icon,
                         disabled = false,
                         type,
                         example = "",
                         ...rest
                     }) => {

    const [placeHolderText, setPlaceHolderText] =
        useState(`${placeholder} ${example ? `: (לדוגמא: ${example})` : ''}`);

    const handleFocus = () => {
        setPlaceHolderText(placeholder);
    }

    const handleBlur = () => {
        if (value === "")
            setPlaceHolderText(`${placeholder} ${example ? `: (לדוגמא: ${example})` : ''}`);
    }

    const inputClass = () => {
        if (type === 'radio' || type === 'checkbox') {
            return 'custom-input-choice custom-input-radio';
        }
        if (type === 'checkbox') {
            return 'custom-input-choice custom-input-checkbox';
        }
        return 'custom-input';
    }

    const labelClass = () => {
        if (type === 'radio') {
            return 'custom-input-choice-label custom-input-radio-label';
        }
        if (type === 'checkbox') {
            return 'custom-input-choice-label custom-input-checkbox-label';
        }
        return 'custom-input-label';
    }

    const specialContainer = () => {
        if (type === 'radio' || type === 'checkbox') {
            return 'custom-input-choice-container';
        }

        return 'custom-input-container';
    }

    const whenChange = (event) => {
        if(type === 'checkbox' || type === 'radio') {
            event.target.value = event.target.checked;
        }
        onChange(event);
    }

    return (
        <div className={specialContainer()}>
            {Icon && type !== 'select' && <Icon className="custom-input-icon"/>}
            {type !== 'select' &&
                <input type={type ? type : 'text'}
                       placeholder=" "
                       value={value}
                       onChange={whenChange}
                       className={`text-light ${inputClass()}`}
                       name={name}
                       required={required}
                       disabled={disabled}
                       onFocus={handleFocus}
                       onBlur={handleBlur}
                       {...rest}/>
            }
            {type === 'select' &&
                <Toggle defaultHeader={placeHolderText}
                        onChange={onChange}
                        className="w-100"
                        name={name}
                        {...rest}/>
            }
            <label htmlFor={rest?.id || ""} className={labelClass()}>
                {required && <span className="danger-color">*</span>}
                {type !== 'select' ? placeHolderText : ''}
            </label>
        </div>
    );
}

export default CustomInput;