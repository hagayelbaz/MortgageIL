import './LevelControlRadioButton.css'

const LevelControlRadioButton = ({label}) =>{
    return (
        <div className="rb">
            <input type="radio" className="form-check-input m-1 ms-2" name="level" value="1" />
            <label className="form-check-label">{label}</label>
        </div>
    )
}

export default LevelControlRadioButton;