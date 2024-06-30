import './CustomInput.css';


const CustomInput = ({placeholder, value, required, onChange, name, icon: Icon, disabled = false, type}) => {

    return (
        <div className="custom-input-container">
            {Icon && <Icon className="custom-input-icon"/>}
            <input type={type ? type : 'text'}
                   placeholder=" "
                   value={value}
                   onChange={onChange}
                   className="custom-input text-light"
                   name={name}
                   required={required}
                   disabled={disabled}
                   id="custom-input-field"/>
            <label htmlFor="custom-input-field" className="custom-input-label">
                {placeholder}
            </label>
        </div>
    );
}

export default CustomInput;