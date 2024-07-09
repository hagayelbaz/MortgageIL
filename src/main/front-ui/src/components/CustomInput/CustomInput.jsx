import './CustomInput.css';
import {useEffect, useState} from "react";
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


    return (
        <div className="custom-input-container">
            {Icon && type !== 'select' && <Icon className="custom-input-icon"/>}
            {type !== 'select' &&
                <input type={type ? type : 'text'}
                       placeholder=" "
                       value={value}
                       onChange={onChange}
                       className="custom-input text-light"
                       name={name}
                       required={required}
                       disabled={disabled}
                       onFocus={handleFocus}
                       onBlur={handleBlur}
                       id="custom-input-field"
                       {...rest}/>
            }
            {type === 'select' &&
                <Toggle defaultHeader={placeHolderText}
                        onChange={onChange}
                        className="w-100"
                        name={name}
                        {...rest}/>
            }
            <label htmlFor="custom-input-field" className="custom-input-label">
                {required && <span className="danger-color">*</span>}
                {type !== 'select' ? placeHolderText : ''}
            </label>
        </div>
    );
}

export default CustomInput;