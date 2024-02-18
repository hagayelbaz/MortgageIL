import React, {useEffect, useState} from "react";
import "./LevelSelectButton.css";


const LevelSelectButton = ({label, onClick, bootstrapIcon, selected}) => {
    const [iconClass, setIconClass] = useState("bi " + bootstrapIcon);

    const onHover = () => {
        setIconClass("bi " + bootstrapIcon + "-fill");
    }

    const onLeave = () => {
        setIconClass("bi " + bootstrapIcon);
    }

    return (
        <button type="button" onMouseLeave={onLeave} onMouseEnter={onHover} onClick={!selected ? onClick : () => {}}
                className="fw-bold text-center fs-4 rounded-2 level-select-button py-3 px-4">
            <div className="">
                <i className={`ms-3 d-block bi ` + iconClass}></i>
                <i>{label}</i>
            </div>
        </button>
    );
}

export default LevelSelectButton;