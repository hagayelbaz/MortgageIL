import {Vars} from "../../../../../Vars";
import Chart from "../../../../Chart/Chart";
import React, {useEffect, useState} from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {OverlayTrigger} from "react-bootstrap";
import './CardCPI.css';
import OverlayContent from "./OverlayContent";

// default style for the chart
const chartStyle = {
    percentage: 'fs-6',
    container: 'secondary-bg text-light rounded-2 p-3 card-data',
    tick: {
        fontSize: 12,
    },
    tooltip: {
        container: 'secondary-bg text-light rounded-2 border-1 accent-border px-3 py-1',
    }
}

/**
 * CardCPI component
 * the data should be an array of objects with date and value keys
 * @see Chart
 * @param data - array of objects with date and value keys
 * @returns {Element} - CardCPI component
 * @constructor - CardCPI
 */
const CardCPI = ({data}) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState(data);

    //<editor-fold desc="Handle filter dates">
    useEffect(() => {
        const normalizedStartDate = formatDate(startDate);
        const normalizedEndDate = formatDate(endDate);

        const filtered = data.filter(item => {
            const itemDate = formatDate(new Date(item.date));
            return itemDate >= normalizedStartDate && itemDate <= normalizedEndDate;
        });

        setFilteredData(filtered);
        setShowOverlay(false);
    }, [startDate, endDate]);

    const formatDate = (date) => {
        return new Date(date).toISOString().substring(0, 10);
    };
    //</editor-fold>

    const formatDateToShow = (date) => {
        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
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
                                            setShowOverlay, startDate,
                                            setStartDate, endDate, setEndDate
                                        })
                                    }>
                        <FilterAltIcon onClick={() => setShowOverlay(true)} role="button" className="text-light"/>
                    </OverlayTrigger>
                </div>
                <hr/>
                <p className="small fw-light muted-text">
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
