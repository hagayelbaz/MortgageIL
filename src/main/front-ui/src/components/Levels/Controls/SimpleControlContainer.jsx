import React, {Children} from "react";
import './SimpleControlContainer.css';

const SimpleControlContainer = ({children}) => {
    return (
        <div className="container-fluid control-simple-container px-2 py-1">
            <div className="row">
                {Children.map(children, (child, index) => {
                    const isNotEmpty = Children.count(child.props.children) > 0 || Object.keys(child.props).length > 0;
                    return (
                        isNotEmpty && (
                            <div key={index} className="">
                                {React.cloneElement(child, {
                                    className: `${child.props.className}`,
                                })}
                            </div>
                        )
                    );
                })}

            </div>
        </div>
    );
}

export default SimpleControlContainer;