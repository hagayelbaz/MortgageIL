import './LevelControlCheckBox.css'


const LevelControlCheckBox = ({ label, classes }) => {
    return (
        <div className={`form-check ` + classes}>
            <input className="checkbox form-check-input" type="checkbox"/>
            <label className="form-check-label">{label}</label>
        </div>

    );
}

export default LevelControlCheckBox;