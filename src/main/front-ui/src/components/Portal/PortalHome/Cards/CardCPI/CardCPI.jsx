import {Vars} from "../../../../../Vars";
import Chart from "../../../../Chart/Chart";
import React, {useEffect, useState} from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {OverlayTrigger} from "react-bootstrap";
import './CardCPI.css';
import OverlayContent from "./OverlayContent";

const chartStyle = {
    percentage: 'fs-6',
    container: 'secondary-bg text-light rounded-2 p-3 card-data',
    tick: {
        fontSize: 12,
    },
    tooltip: {
        container: 'primary-bg text-dark rounded-2 px-2 py-1',
    }
}
export const data2 = [
    {
        "date": "1998-01-31T22:00:00.000Z",
        "value": 101.47
    },
    {
        "date": "1998-02-28T22:00:00.000Z",
        "value": 100.78
    },
    {
        "date": "1998-03-31T21:00:00.000Z",
        "value": 101.13
    },
    {
        "date": "1998-04-30T21:00:00.000Z",
        "value": 101.91
    },
    {
        "date": "1998-05-31T21:00:00.000Z",
        "value": 100.65
    },
    {
        "date": "1998-06-30T21:00:00.000Z",
        "value": 104.97
    },
    {
        "date": "1998-07-31T21:00:00.000Z",
        "value": 100.81
    },
    {
        "date": "1998-08-31T21:00:00.000Z",
        "value": 102.24
    },
    {
        "date": "1998-09-30T22:00:00.000Z",
        "value": 103.62
    },
    {
        "date": "1998-10-31T22:00:00.000Z",
        "value": 100.39
    },
    {
        "date": "1998-11-30T22:00:00.000Z",
        "value": 98.83
    },
    {
        "date": "1998-12-31T22:00:00.000Z",
        "value": 99.53
    },
    {
        "date": "1999-01-31T22:00:00.000Z",
        "value": 104.14
    },
    {
        "date": "1999-02-28T22:00:00.000Z",
        "value": 100.8
    },
    {
        "date": "1999-03-31T22:00:00.000Z",
        "value": 98.33
    },
    {
        "date": "1999-04-30T21:00:00.000Z",
        "value": 100.02
    },
    {
        "date": "1999-05-31T21:00:00.000Z",
        "value": 103.54
    },
    {
        "date": "1999-06-30T21:00:00.000Z",
        "value": 100.96
    },
    {
        "date": "1999-07-31T21:00:00.000Z",
        "value": 99.63
    },
    {
        "date": "1999-08-31T21:00:00.000Z",
        "value": 101.42
    },
    {
        "date": "1999-09-30T22:00:00.000Z",
        "value": 104.88
    },
    {
        "date": "1999-10-31T22:00:00.000Z",
        "value": 103.01
    },
    {
        "date": "1999-11-30T22:00:00.000Z",
        "value": 101.99
    },
    {
        "date": "1999-12-31T22:00:00.000Z",
        "value": 102.11
    },
    {
        "date": "2000-01-31T22:00:00.000Z",
        "value": 98.73
    },
    {
        "date": "2000-02-29T22:00:00.000Z",
        "value": 101.52
    },
    {
        "date": "2000-03-31T22:00:00.000Z",
        "value": 100.57
    },
    {
        "date": "2000-04-30T21:00:00.000Z",
        "value": 101.19
    },
    {
        "date": "2000-05-31T21:00:00.000Z",
        "value": 101.14
    },
    {
        "date": "2000-06-30T21:00:00.000Z",
        "value": 100.1
    },
    {
        "date": "2000-07-31T21:00:00.000Z",
        "value": 104.65
    },
    {
        "date": "2000-08-31T21:00:00.000Z",
        "value": 101.5
    },
    {
        "date": "2000-09-30T21:00:00.000Z",
        "value": 102.1
    },
    {
        "date": "2000-10-31T22:00:00.000Z",
        "value": 101.67
    },
    {
        "date": "2000-11-30T22:00:00.000Z",
        "value": 104.52
    },
    {
        "date": "2000-12-31T22:00:00.000Z",
        "value": 103.13
    },
    {
        "date": "2001-01-31T22:00:00.000Z",
        "value": 101
    },
    {
        "date": "2001-02-28T22:00:00.000Z",
        "value": 99.76
    },
    {
        "date": "2001-03-31T22:00:00.000Z",
        "value": 103.04
    },
    {
        "date": "2001-04-30T21:00:00.000Z",
        "value": 104.26
    },
    {
        "date": "2001-05-31T21:00:00.000Z",
        "value": 101.04
    },
    {
        "date": "2001-06-30T21:00:00.000Z",
        "value": 101.6
    },
    {
        "date": "2001-07-31T21:00:00.000Z",
        "value": 98.79
    },
    {
        "date": "2001-08-31T21:00:00.000Z",
        "value": 103.16
    },
    {
        "date": "2001-09-30T22:00:00.000Z",
        "value": 99.3
    },
    {
        "date": "2001-10-31T22:00:00.000Z",
        "value": 104.37
    },
    {
        "date": "2001-11-30T22:00:00.000Z",
        "value": 99.62
    },
    {
        "date": "2001-12-31T22:00:00.000Z",
        "value": 102.86
    },
    {
        "date": "2002-01-31T22:00:00.000Z",
        "value": 103.8
    },
    {
        "date": "2002-02-28T22:00:00.000Z",
        "value": 102.51
    },
    {
        "date": "2002-03-31T21:00:00.000Z",
        "value": 104.75
    }
];


const CardCPI = ({}) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState(data2);

    useEffect(() => {
        const normalizedStartDate = formatDate(startDate);
        const normalizedEndDate = formatDate(endDate);

        const filtered = data2.filter(item => {
            const itemDate = formatDate(new Date(item.date));
            return itemDate >= normalizedStartDate && itemDate <= normalizedEndDate;
        });

        setFilteredData(filtered);
        setShowOverlay(false);
    }, [startDate, endDate]);


    const formatDate = (date) => {
        return new Date(date).toISOString().substring(0, 10);
    };

    const formatDateToShow = (date) => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }


    return (
        <Chart chartStyle={chartStyle} data={filteredData} color={Vars.ACCENT_COLOR}
               countXTicks={4} aspect={2}>
            <div>
                <div className="d-flex justify-content-between">
                    <h2 className="fs-4 fw-lighter p-0 m-0">
                        מדד המחירים לצרכן
                    </h2>

                    <OverlayTrigger show={showOverlay} trigger="click" placement="bottom"
                                    overlay={
                                        OverlayContent({
                                            setShowOverlay,
                                            startDate,
                                            setStartDate,
                                            endDate,
                                            setEndDate
                                        })
                                    }>
                        <FilterAltIcon onClick={() => setShowOverlay(true)} role="button" className="text-light"/>
                    </OverlayTrigger>
                </div>
                <hr/>
                <p className="small fw-light">
                    <span>מציג נתונים בין </span>
                    <span>{formatDateToShow(startDate)}</span>
                    <span> ל </span>
                    <span>{formatDateToShow(endDate)}</span>
                </p>
            </div>
        </Chart>
    )
}


export default CardCPI;
