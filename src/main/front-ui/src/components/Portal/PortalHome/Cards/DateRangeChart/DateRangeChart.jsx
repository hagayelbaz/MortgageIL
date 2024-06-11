import Loading from "../../../../Loading/Loading";
import {OverlayTrigger} from "react-bootstrap";
import OverlayContent from "./OverlayContent";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import React, {useEffect, useState} from "react";
import Chart from "../../../../Chart/Chart";
import './DateRangeChart.css';

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

const DateRangeChart = ({
                            isLoading = undefined,
                            error = undefined,
                            isOK = undefined,
                            header,
                            data,
                            color
                        }) => {

    const [showOverlay, setShowOverlay] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const tmpDate = new Date();
        tmpDate.setFullYear(tmpDate.getFullYear() - 1);
        setStartDate(tmpDate);
    }, []);


    //<editor-fold desc="Handle filter dates">
    useEffect(() => {
        if (!isOK) return;

        const filtered = data?.filter(item => {
            const iDate = formatDate(item.date);
            return iDate >= formatDate(startDate) && iDate <= formatDate(endDate);
        });

        setFilteredData(filtered);
        setShowOverlay(false);
    }, [startDate, endDate, isOK]);

    const formatDate = (date) => {
        return new Date(date).toISOString().substring(0, 10);
    };
    //</editor-fold>

    const formatDateToShow = (date) => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    return (
        <Loading isLoading={isLoading}>
            <Chart chartStyle={chartStyle} data={filteredData} color={color}
                   countXTicks={5} aspect={2}>
                <div>
                    <div className="d-flex justify-content-between">
                        <h2 className="fs-4 fw-lighter p-0 m-0">
                            {header}
                        </h2>

                        <OverlayTrigger show={showOverlay} placement="bottom"
                                        overlay={
                                            OverlayContent({
                                                setShowOverlay, startDate,
                                                setStartDate, endDate, setEndDate
                                            })
                                        }>
                            <FilterAltIcon onClick={() => setShowOverlay(true)}
                                           role="button" className="text-light"/>
                        </OverlayTrigger>
                    </div>
                    <hr/>
                    <p className="small fw-light muted-color">
                        <span>מציג נתונים בין </span>
                        <span>{formatDateToShow(startDate)}</span>
                        <span> ל </span>
                        <span>{formatDateToShow(endDate)}</span>
                    </p>
                </div>
            </Chart>
        </Loading>
    )
}

export default DateRangeChart