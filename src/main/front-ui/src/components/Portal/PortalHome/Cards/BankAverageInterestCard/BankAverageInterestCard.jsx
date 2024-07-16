import withFetch from "../../../../HOC/withFetch";
import Endpoints from "../../../../../Classes/Endpoints";
import {useEffect, useState} from "react";
import ProgressBar from "../../../../ProgressBar/ProgressBar";
import React from "react";
import {Bar, BarChart, Cell, Label, LabelList, ResponsiveContainer, XAxis, YAxis} from "recharts";
import Loading from "../../../../Loading/Loading";
import Help from "../../../../Help/Help";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";


const BankAverageInterestCard = ({isLoading, error, isOK, data}) => {
    const [max, setMax] = useState(0);
    const [orderedData, setOrderedData] = useState([]);

    useEffect(() => {
        setOrderedData(data?.sort((a, b) => a?.value - b?.value));
        setMax(data?.reduce((acc, bank) => bank?.value > acc ? bank?.value : acc, 0));
    }, [data]);


    const CustomizedLabel = ({x, y, value, width, height}) => {

        return (
            <text x={x + width / 2} y={y + height / 2} textAnchor="middle"
                  style={{fontSize: '.7rem', fill: '#FFFFFF', fontWeight: 'bold'}}>
                {`${parseFloat(value).toFixed(2)}%`}
            </text>
        );
    };


    return (
        <Loading isLoading={isLoading}>
            <div className="card secondary-bg card-data text-light h-100">
                <div className="card-body pb-0 mb-0">
                    <h5 className="card-title card-data-header fs-4 fw-lighter p-0 m-0">
                        <span>ממוצע ריביות בבנקים השונים</span>
                        <Help text="ממוצע זה " className="mx-1">
                            <HelpOutlineIcon className="muted-color"/>
                        </Help>
                    </h5>
                    <hr/>
                    <div className="card-text mt-3">
                        <ResponsiveContainer className="position-relative mt-5" width="100%" minWidth="100%" aspect={2}>
                            <BarChart data={orderedData} layout="vertical" margin={{left: 50, right: 50}}
                                      stackOffset="expand">
                                <XAxis hide type="number"/>
                                <YAxis textAnchor="start" type="category" dataKey="bank" stroke="#FFFFFF"/>
                                <Bar dataKey="value"
                                     fill="#00a6fa"
                                     layout="vertical"
                                     label={<CustomizedLabel/>}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </Loading>
    )
}

export default BankAverageInterestCard;