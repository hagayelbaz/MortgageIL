import {useCallback} from "react";
import Endpoints from "../../../../../Classes/Endpoints";
import '../../../../../shared.css';
import withFetch from "../../../../HOC/withFetch";
import Card from "../Card/Card";
import CardInside from "../Card/CardInside";
import {PercentOutlined} from "@mui/icons-material";

const CurrentCpiCard = () => {
    const icon = <PercentOutlined/>;
    const CardWithFetch = withFetch(Card);
    const InsideCardWithFetch = withFetch(CardInside);


    const mapData = useCallback((data) => {
        return {
            value: `${parseFloat(data?.value).toFixed(2) || ''}%`,
            date: `נכון ל: ${data?.date || ''}`
        }
    }, []);

    const mapInsideData = useCallback((data) => {
        return {
            value: `מתחילת שנה: ${(parseFloat(data?.value).toFixed(2)) || ''}%`,
        }
    }, []);

    return (
        <>
            <CardWithFetch endpoint={Endpoints.CPI.LAST_MONTH_CHANGE_ENDPOINT}
                           icon={icon}
                           dataMapping={mapData}
                           iconColor="bg-danger"
                           help="שינוי במדד מחירים לצרכן מחודש קודם"
                           header="מדד מחירים לצרכן">
                <InsideCardWithFetch endpoint={Endpoints.CPI.LAST_YEAR_CHANGE_THIS_MONTH_ENDPOINT}
                                     dataMapping={mapInsideData}/>
            </CardWithFetch>
        </>
    )
}

export default CurrentCpiCard;