import React, {useEffect, useId, useState} from "react";
import "./Chart.css";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CustomTooltip from "./CustomTooltip/CustomTooltip";
import calculateDiff from "./chartUtils";
import {ArrowDropDown, ArrowDropUp} from "@mui/icons-material";
import NotInterestedIcon from '@mui/icons-material/NotInterested';


const Chart = ({data = [], countXTicks, color, children, chartStyle, aspect = 2}) => {
    const [ya, setYa] = useState({});
    const uniqueId = useId();

    useEffect(() => {
        if(!data || data?.length === 0)
            return;

        const _min = Math.min(...data?.map(item => parseFloat(item.value)));
        const _max = Math.max(...data?.map(item => parseFloat(item.value)));
        setYa({min: _min, max: _max, margin: (_max - _min) * 0.1});
    }, [data]);


    const xTicks = (val, index) => {
        if (!data || data?.length === 0)
            return '';

        const _val = new Date(val).toLocaleDateString("he-IL",
            {year: "numeric", month: "2-digit"});

        if (countXTicks === 'auto')
            return _val;

        return index % (Math.round(data?.length / countXTicks)) === 0 ? _val : '';
    }

    const diffFromLast = () => {
        if (!data || data?.length === 0)
            return 0;
        return calculateDiff(data[data?.length - 1], data);
    }

    return (
        <>
            <div className={chartStyle?.container}>
                {children}
                <div>
                    <p className={chartStyle?.percentage}>
                        {diffFromLast() >= 0 ?
                            <ArrowDropUp className="text-success"/> :
                            <ArrowDropDown className="text-danger"/>
                        }
                        <span className={diffFromLast() >= 0 ? 'text-success' : 'text-danger'}>
                            {`${Math.abs(diffFromLast()).toFixed(2)}%`}
                        </span>
                        <span className="muted-color">
                            &nbsp;(מחודש קודם)
                        </span>
                    </p>
                </div>
                <ResponsiveContainer className="position-relative" width="100%" minWidth="100%" aspect={aspect}>
                    {data?.length === 0 && (
                        <div className="no-data">
                            <NotInterestedIcon/>
                            <p className="">אין נתונים להצגה</p>
                        </div>
                    )}
                    <AreaChart data={data}>
                        {data?.length > 0 && (
                            <>
                                <defs>
                                    <linearGradient id={`color-${uniqueId}`} x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor={color} stopOpacity={0.7}/>
                                        <stop offset="95%" stopColor={color} stopOpacity={0.01}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="date"
                                       tickFormatter={xTicks}
                                       axisLine={false}
                                       tick={{...chartStyle.tick}}
                                       tickLine={false}/>
                                <YAxis dataKey="value"
                                       tickMargin={50}
                                       axisLine={false}
                                       tickLine={false}
                                       tick={{...chartStyle.tick}}
                                       domain={[ya.min - ya.margin, ya.max + ya.margin]}
                                       tickFormatter={tick => tick.toFixed(2)}/>
                                <CartesianGrid strokeDasharray="2" vertical={false}/>
                                <Tooltip content={<CustomTooltip data={data} style={chartStyle?.tooltip}/>}/>
                                <Area type="monotone"
                                      dataKey="value"
                                      stroke={color}
                                      fillOpacity={1}
                                      fill={`url(#color-${uniqueId})`}/>
                            </>
                        )}
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}


export default Chart;