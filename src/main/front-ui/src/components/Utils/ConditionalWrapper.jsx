import React from 'react';

export const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? React.cloneElement(wrapper, {}, children) : <>{children}</>;

export const MultiConditionalWrapper = ({ conditions, wrappers, children }) => {
    let result = <>{children}</>;
    conditions.forEach((condition, index) => {
        if (condition) {
            result = React.cloneElement(wrappers[index], {}, result);
        }
    });
    return result;
}

