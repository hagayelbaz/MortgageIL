import './CustomInput.css';


const CustomInput = ({ placeholder, value, onChange, name, icon : Icon, disabled = false }) => {

    return (
        <div className="custom-input-container">
            {Icon && <Icon className="custom-input-icon"/>}
            <input type="text"
                   placeholder=" "
                   value={value}
                   onChange={onChange}
                   className="custom-input text-light"
                   name={name}
                   disabled={disabled}
                   id="custom-input-field"/>
            <label htmlFor="custom-input-field" className="custom-input-label">
                {placeholder}
            </label>
        </div>
    );
}

export default CustomInput;