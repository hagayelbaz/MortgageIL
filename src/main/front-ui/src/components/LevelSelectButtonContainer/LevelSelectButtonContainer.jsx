import React, {Children, useEffect} from "react";
import "./LevelSelectButtonContainer.css";

const LevelSelectButtonContainer = ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                {Children.map(children, (child, index) => (
                    <div key={index} className="col-12 col-md mb-2 m-md-0 d-flex">
                        {React.cloneElement(child, {
                            className: `${child.props.className} w-100 mx-1`,
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LevelSelectButtonContainer;
