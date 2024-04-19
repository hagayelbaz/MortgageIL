import React, {useEffect} from "react";
import calculateDiff from "../chartUtils";
import '../../../shared.css';
import {ArrowDropDown, ArrowDropUp} from "@mui/icons-material";



const CustomTooltip = ({active, payload, label, data, style}) => {
    const [tooltipStyle, setTooltipStyle] = React.useState(style ?? style);
    const item = payload?.length > 0 ? payload[0] : data[0] || {value: 0};
    const diff = calculateDiff({value: item.value, date: label}, data || []);

    useEffect(() => {
        setTooltipStyle(style ?? style);
    }, [style]);

    if (active) {
        return (
            <div className={tooltipStyle.container}>
                <p>{`${new Date(label).toLocaleDateString("en-US", {
                    month: '2-digit',
                    year: 'numeric'
                })} - ${item.value}p`}</p>
                <p>
                    <span className={diff >= 0 ? 'text-success' : 'text-danger'}>
                        {`${Math.abs(diff).toFixed(2)}%`}
                        {diff >= 0 && <ArrowDropUp className="text-success"/>}
                        {diff < 0 && <ArrowDropDown className="text-danger"/>}
                    </span>
                </p>
            </div>
        );
    }

    return null;
}

export default CustomTooltip;