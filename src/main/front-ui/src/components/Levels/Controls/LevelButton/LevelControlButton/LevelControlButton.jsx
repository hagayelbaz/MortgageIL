import React from "react";
import "./LevelControlButton.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const LevelControlButton = ({label, onClick, isSelected, selected}) => {

    return (
        <button type="button" onClick={onClick}
                className={`text-center secondary-bg-light text-light fs-5 m-2 rounded-2 level-select-button py-3 px-4 position-relative `
                    + (isSelected ? `secondary-bg-dark text-light` : ``)}>
            {label}
        </button>
    );
}

export default LevelControlButton;