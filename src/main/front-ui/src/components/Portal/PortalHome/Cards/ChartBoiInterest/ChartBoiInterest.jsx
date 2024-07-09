import withFetch from "../../../../HOC/withFetch";
import DateRangeChart from "../DateRangeChart/DateRangeChart";
import {useCallback} from "react";
import Endpoints from "../../../../../Classes/Endpoints";


const ChartBoiInterest = () => {
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
            <CardWithFetch endpoint={Endpoints.INTEREST.BASE_ENDPOINT}
                           dataMapping={mapData}
                           color="#e25a67"
                           header="ריבית בנק ישראל"/>
        </>
    )
}

export default ChartBoiInterest;