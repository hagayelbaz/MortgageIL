import React, {Children} from "react";
import "./LevelControlButtonContainer.css";

const LevelControlButtonContainer = ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                {React.Children.map(children, (child, index) => {
                    const isNotEmpty = Children.count(child.props.children) > 0 || Object.keys(child.props).length > 0;
                    return (
                        isNotEmpty && (
                            <div key={index} className="col-12 col-md mb-2 m-md-0 d-flex">
                                {React.cloneElement(child, {
                                    className: `${child.props.className} w-100 mx-1`,
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
