import React, {Children} from "react";

const LevelControlInputContainer = ({children}) => {
    return (
        <div className="container-fluid px-2">
            <div className="row">
                {React.Children.map(children, (child, index) => {
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

export default LevelControlInputContainer;