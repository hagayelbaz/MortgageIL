import './CustomCheckBox.css';

const CustomCheckBox = ({label, checked, onChange}) => {
    return (
        <div className="custom-checkbox">
            <input
                role="button"
                className="ms-2 form-check-input"
                type="checkbox"
                id={label}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <label className="" htmlFor={label}>{label}</label>
        </div>
    );
};

export default CustomCheckBox;