import React, {useEffect} from "react";
import "./ProgressBar.css";

const ProgressBar = ({
                         currentStep,
                         totalSteps = 100,
                         color,
                         className,
                         fixed = 0,
                         textColor = "white",
                         pos = 'in',
                         lineHeight = '15px',
                         textClass
                     }) => {
    const progress = (currentStep / totalSteps) * 100;


    return (
        <div className="container-fluid">
            <div className="row d-flex align-items-center">
                <div className={`progress col position-relative p-0 ${className}`}
                     style={{backgroundColor: 'rgba(200,200,200,.4)', height: lineHeight}}>
                    <div className="progress-bar rounded-2"
                         role="progressbar"
                         style={{width: `${progress}%`, backgroundColor: `${color ?? color}`}}
                         aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                        {pos === 'in' &&
                            <span className={`text-end px-1 m-0 position-absolute fw-bold ${!color ? 'accent-bg' : ''}`}
                                  style={{color: textColor}}>
                        {parseFloat(currentStep).toFixed(fixed)}%
                    </span>
                        }
                    </div>
                </div>
                {pos === 'out' &&
                    <div className="col-auto me-1">
                        <small className={`fw-bold ${!color ? 'accent-bg' : ''} ${textClass}`}
                              style={{color: textColor}}>
                            {parseFloat(currentStep).toFixed(fixed)}%
                        </small>
                    </div>
                }
            </div>
        </div>
    );
}

export default ProgressBar;