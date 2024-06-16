import React, {useEffect} from "react";
import "./ProgressBar.css";

const ProgressBar = ({currentStep, totalSteps, color, className, fixed = 0, textColor = "white"}) => {
    const progress = (currentStep / totalSteps) * 100;


    return (
        <div className={`progress position-relative ${className}`}
             style={{backgroundColor: 'rgba(200,200,200,.4)'}}>
            <div className="progress-bar rounded-2"
                 role="progressbar" style={{width: `${progress}%`, backgroundColor: `${color ?? color}`}}
                 aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                <span className={`text-end p-1 m-0 position-absolute fw-bold ${!color ? 'accent-bg' : ''}`}
                      style={{color: textColor}}>
                    {parseFloat(currentStep).toFixed(fixed)}%
                </span>
            </div>
        </div>
    );
}

export default ProgressBar;