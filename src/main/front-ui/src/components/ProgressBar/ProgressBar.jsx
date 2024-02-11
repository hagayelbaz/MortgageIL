import React, {useEffect} from "react";
import "./ProgressBar.css";

const ProgressBar = ({currentStep, totalSteps}) => {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className="mt-5 progress secondary-bg">
            <div className="progress-bar rounded-2"
                 role="progressbar" style={{width: `${progress}%`}}
                 aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                <span className="text-end p-1 accent-bg primary-color fw-bold">
                    {Math.round(progress)}%
                </span>
            </div>
        </div>
    );
}

export default ProgressBar;