import {useCallback} from "react";
import Endpoints from "../../../../../Classes/Endpoints";
import '../../../../../shared.css';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import './BoiCurrentInterestCard.css';
import Card from "../Card/Card";
import CardInside from "../Card/CardInside";
import withFetch from "../../../../HOC/withFetch";

const BoiCurrentInterestCard = () => {
    const icon = <TrendingUpIcon/>;
    const CardWithFetch = withFetch(Card);
    const InsideCardWithFetch = withFetch(CardInside);

    const mapData = useCallback((data) => {
        return {
            value: `${data?.value || ''}%`,
            date: `נכון ל: ${data?.date || ''}`
        }
    }, []);

    const mapInsideData = useCallback((data) => {
        return {
            value: `ריבית פריים: ${(parseFloat(data?.value) + 1.5) || ''}%`,
        }
    }, []);

    return (
        <>
            <CardWithFetch endpoint={Endpoints.INTEREST.CURRENT_ENDPOINT}
                           icon={icon}
                           dataMapping={mapData}
                           iconColor="bg-success"
                           header="ריבית בנק ישראל">
                <InsideCardWithFetch endpoint={Endpoints.INTEREST.CURRENT_ENDPOINT}
                                     dataMapping={mapInsideData}/>
            </CardWithFetch>
        </>
    )
}

export default BoiCurrentInterestCard;