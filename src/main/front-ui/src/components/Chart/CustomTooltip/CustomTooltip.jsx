import React from "react";
import calculateDiff from "../chartUtils";
import '../../../shared.css';
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";

const CustomTooltip = ({active, payload, label, data}) => {
    const item = payload?.length > 0 ? payload[0] : data[0];
    const diff = calculateDiff({value: item.value, date: label}, data);


    if (active) {
        return (
            <div className="custom-tooltip p-2 py-1 rounded-2">
                <p>{`${new Date(label).toLocaleDateString("en-US", {
                    month: '2-digit',
                    year: 'numeric'
                })} - ${item.value}p`}</p>
                <p>
                    <span className={diff >= 0 ? 'text-success' : 'text-danger'}>
                        {`${Math.abs(diff).toFixed(2)}%`}
                        {diff >= 0 && <AiFillCaretUp className="text-success"/>}
                        {diff < 0 && <AiFillCaretDown className="text-danger"/>}
                    </span>
                </p>
            </div>
        );
    }

    return null;
}

export default CustomTooltip;