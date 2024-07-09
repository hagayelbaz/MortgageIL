import DateRangeChart from "../DateRangeChart/DateRangeChart";
import withFetch from "../../../../HOC/withFetch";
import {useCallback} from "react";
import Endpoints from "../../../../../Classes/Endpoints";

const ChartCpiCard = () => {
    const CardWithFetch = withFetch(DateRangeChart);

    const mapData = useCallback((data) => {
        return data.map((item, index) => {
            return {
                date: new Date(item.date),
                value: item.value
            }
        });
    }, []);


    return (
        <>
            <CardWithFetch endpoint={Endpoints.CPI.HISTORIC_POINTS_ENDPOINT}
                           dataMapping={mapData}
                           color="#4ca17a"
                           header="מדד מחירים לצרכן"/>
        </>
    )
}

export default ChartCpiCard;