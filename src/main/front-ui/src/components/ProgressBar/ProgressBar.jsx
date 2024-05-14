import React, {useEffect} from "react";
import "./ProgressBar.css";

const ProgressBar = ({currentStep, totalSteps, color, className}) => {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className={`progress ${className}`}
             style={{backgroundColor: 'rgba(200,200,200,.4)'}}>
            <div className="progress-bar rounded-2"
                 role="progressbar" style={{width: `${progress}%`, backgroundColor: `${color ?? color}`}}
                 aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                <span className={`text-end p-1 m-0 primary-color fw-bold ${!color ? 'accent-bg' : ''}`}>
                    {Math.round(progress)}%
                </span>
            </div>
        </div>
    );
}

export default ProgressBar;