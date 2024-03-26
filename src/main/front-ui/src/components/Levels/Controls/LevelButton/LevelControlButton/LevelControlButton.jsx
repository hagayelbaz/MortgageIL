import React, {useEffect, useState} from "react";
import "./LevelControlButton.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const LevelControlButton = ({label, onClick, bootstrapIcon, selected}) => {
    const [iconClass, setIconClass] = useState("bi-" + bootstrapIcon);

    const onHover = () => {
        setIconClass("bi-" + bootstrapIcon + "-fill");
    }

    const onLeave = () => {
        setIconClass("bi-" + bootstrapIcon);
    }

    return (
        <button type="button" onMouseLeave={onLeave} onMouseEnter={onHover} onClick={!selected ? onClick : () => {}}
                className="text-center fs-5 m-2 rounded-2 level-select-button py-3 px-4">
            <div className="">
                <i className={`ms-3 d-block bi ` + iconClass}></i>
                <i>{label}</i>
            </div>
        </button>
    );
}

export default LevelControlButton;