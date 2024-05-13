import React, {useEffect, useState} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./LevelControlInput.css";
import MaskedInput from 'react-text-mask'


const LevelControlInput = ({pattern, placeholder, label, required, insideLabel, mask}) => {

    return (
        <div className="my-4 container-fluid">
            <div className="row">
                <label htmlFor="username" className="col p-0 m-0 form-label">
                    {label}
                </label>
                <div className="col-12 col-md-9 col-8 m-0 p-0">
                    <div className="position-relative">
                        <MaskedInput type="text"
                                     className="p-2 w-100 form-input valid-input"
                                     pattern={pattern}
                                     placeholder={placeholder}
                                     required={required}
                                     guide={false}
                                     mask={mask({})}/>
                        <i className="p-2 fw-bold label-icon position-absolute start-0 top-0">
                            {insideLabel}
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LevelControlInput;
