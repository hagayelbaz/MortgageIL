import React, {Children} from "react";
import "./LevelControlButtonContainer.css";

const LevelControlButtonContainer = ({ children }) => {
    return (
        <div className="container-fluid m-0 p-0">
            <div className="row">
                {Children.map(children, (child, index) => {
                    const isNotEmpty = Children.count(child.props.children) > 0 || Object.keys(child.props).length > 0;
                    return (
                        isNotEmpty && (
                            <div key={index} className="col-12 col-md m-md-0 d-flex">
                                {React.cloneElement(child, {
                                    className: `${child.props.className} w-100 p-3`,
                                })}
                            </div>
                        )
                    );
                })}

            </div>
        </div>
    );
}

export default LevelControlButtonContainer;
