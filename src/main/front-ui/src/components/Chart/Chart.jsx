import React, {useEffect, useState} from "react";
import "./Chart.css";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CustomTooltip from "./CustomTooltip/CustomTooltip";
import calculateDiff from "./chartUtils";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

const Chart = ({data, countXTicks, header, color, children}) => {
    const [dateToShow, setDateToShow] = useState(data);
    //TODO: change it to more reliable id.
    const randomIndex = Math.floor(Math.random() * data.length);

    useEffect(() => {
        setDateToShow(data);
    }, [data]);

    const xTicks = (val, index) => {
        const _val = new Date(val).toLocaleDateString("en-US", {year: "numeric", month: "2-digit"});

        if (countXTicks === 'auto')
            return _val;

        return index % (Math.round(data.length / countXTicks)) === 0 ? _val : '';
    }

    const diffFromLast = () => {
        return calculateDiff(dateToShow[dateToShow.length - 1], dateToShow);
    }

    return (
        <>
            <h1 className="chart-header display-6">{header}</h1>
            <div>
                {children}
            </div>
            <div>
                <p className="fs-3">
                    {diffFromLast() >= 0 ?
                        <AiFillCaretUp className="text-success" /> :
                        <AiFillCaretDown className="text-danger" />
                    }
                    <span className={diffFromLast() >= 0 ? 'text-success' : 'text-danger'}>
                            {`${Math.abs(diffFromLast()).toFixed(2)}%`}
                    </span>
                </p>
            </div>
            <ResponsiveContainer width="100%" minWidth="100%" aspect={1.7}>
                <AreaChart data={dateToShow}>
                    <defs>
                        <linearGradient id={`color-${randomIndex}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={color} stopOpacity={0.7}/>
                            <stop offset="95%" stopColor={color} stopOpacity={0.01}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="date"
                           tickFormatter={xTicks}
                           axisLine={false}
                           tickLine={false}/>
                    <YAxis dataKey="value"
                           tickMargin={50}
                           axisLine={false}
                           tickLine={false}
                           domain={[dateMin => dateMin - 0.2, dateMax => dateMax + 0.2]}
                           tickFormatter={t => `${t}`}/>
                    <CartesianGrid strokeDasharray="2" vertical={false}/>
                    <Tooltip content={<CustomTooltip data={dateToShow}/>}/>
                    <Area type="monotone"
                          dataKey="value"
                          stroke={color}
                          fillOpacity={1}
                          fill={`url(#color-${randomIndex})`}/>
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}

export default Chart;