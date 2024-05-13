import './LevelControlRadioButton.css'

const LevelControlRadioButton = ({label, name, onClick, isSelected}) =>{

    return (
        <div className="rb">
            <input onChange={onClick}
                   type="radio"
                   className="form-check-input m-1 ms-2"
                   name={name}
                   checked={isSelected}
                   value="1" />
            <label className="form-check-label">{label}</label>
        </div>
    )
}

export default LevelControlRadioButton;