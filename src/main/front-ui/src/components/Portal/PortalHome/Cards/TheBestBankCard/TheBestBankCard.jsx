import {useCallback} from "react";
import Endpoints from "../../../../../Classes/Endpoints";
import '../../../../../shared.css';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import './TheBestBankCard.css';
import Card from "../Card/Card";
import CardInside from "../Card/CardInside";
import withFetch from "../../../../HOC/withFetch";

const TheBestBankCard = () => {
    const icon = <TrendingUpIcon/>;
    const CardWithFetch = withFetch(Card);
    const InsideCardWithFetch = withFetch(CardInside);

    const mapData = useCallback((data) => {
        return {
            value: `${data?.bank}`,
            date: `נכון ל: ${data?.date || ''}`
        }
    }, []);

    const mapInsideData = useCallback((data) => {
        return {
            value: `ממוצע ריבית: ${(parseFloat(data?.value).toFixed(2)) || ''}%`,
        }
    }, []);

    return (
        <>
            <CardWithFetch endpoint={Endpoints.BANK.BEST_BANK}
                           icon={icon}
                           dataMapping={mapData}
                           iconColor="bg-primary"
                           help="ריבית בנק ישראל (ריבית הפריים היא ריבית בנק ישראל + 1.5%)"
                           header="הבנק הזול">
                <InsideCardWithFetch endpoint={Endpoints.BANK.BEST_BANK}
                                     dataMapping={mapInsideData}/>
            </CardWithFetch>
        </>
    )
}

export default TheBestBankCard;