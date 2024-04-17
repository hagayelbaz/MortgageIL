import React, {useEffect, useState} from "react";
import "./Chart.css";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CustomTooltip from "./CustomTooltip/CustomTooltip";
import calculateDiff from "./chartUtils";
import {ArrowDropDown, ArrowDropUp} from "@mui/icons-material";
import NotInterestedIcon from '@mui/icons-material/NotInterested';

const chartStyleDef = {
    percentage: 'fs-3',
    container: '',
    tick: {
        fontSize: 12,
    },
    tooltip: {
        container: 'bg-danger text-dark',
    }
}

const Chart = ({data, countXTicks, color, children, chartStyle, aspect = 2}) => {
    const [style, setStyle] = useState(chartStyle ? chartStyle : chartStyleDef);
    //TODO: change it to more reliable id.
    const randomIndex = Math.floor(Math.random() * data.length);

    useEffect(() => setStyle(chartStyle ? chartStyle : chartStyleDef), [chartStyle]);

    useEffect(() => {
       // console.log(data)
    },[data]);

    const xTicks = (val, index) => {
        if (data.length === 0)
            return '';

        const _val = new Date(val).toLocaleDateString("en-US", {year: "numeric", month: "2-digit"});

        if (countXTicks === 'auto')
            return _val;

        return index % (Math.round(data.length / countXTicks)) === 0 ? _val : '';
    }

    const diffFromLast = () => {
        if (data.length === 0)
            return 0;
        return calculateDiff(data[data.length - 1], data);
    }

    return (
        <>
            <div className={style.container}>
                {children}
                <div>
                    <p className={style.percentage}>
                        {diffFromLast() >= 0 ?
                            <ArrowDropUp className="text-success"/> :
                            <ArrowDropDown className="text-danger"/>
                        }
                        <span className={diffFromLast() >= 0 ? 'text-success' : 'text-danger'}>
                            {`${Math.abs(diffFromLast()).toFixed(2)}%`}
                    </span>
                    </p>
                </div>
                <ResponsiveContainer className="position-relative" width="100%" minWidth="100%" aspect={aspect}>
                    {data.length === 0 && (
                        <div className="no-data">
                            <NotInterestedIcon/>
                            <p className="">אין נתונים להצגה</p>
                        </div>
                    )}
                    <AreaChart data={data}>
                        {data.length > 0 && (
                            <>
                                <defs>
                                    <linearGradient id={`color-${randomIndex}`} x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor={color} stopOpacity={0.7}/>
                                        <stop offset="95%" stopColor={color} stopOpacity={0.01}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="date"
                                       tickFormatter={xTicks}
                                       axisLine={false}
                                       tick={{...style.tick}}
                                       tickLine={false}/>
                                <YAxis dataKey="value"
                                       tickMargin={50}
                                       axisLine={false}
                                       tickLine={false}
                                       tick={{...style.tick}}
                                       domain={[dateMin => dateMin - 0.2, dateMax => dateMax + 0.2]}
                                       tickFormatter={t => `${t}`}/>
                                <CartesianGrid strokeDasharray="2" vertical={false}/>
                                <Tooltip content={<CustomTooltip data={data} style={style.tooltip}/>}/>
                                <Area type="monotone"
                                      dataKey="value"
                                      stroke={color}
                                      fillOpacity={1}
                                      fill={`url(#color-${randomIndex})`}/>
                            </>
                        )}
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

const EmptyChart = () => {
    return (
        <div className="card-data">
            <p>אין נתונים להצגה</p>
        </div>
    );
}

export default Chart;