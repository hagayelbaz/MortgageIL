import {useGet} from "../../../../../Classes/RequestHooks";
import {useEffect} from "react";
import Endpoints from "../../../../../Classes/Endpoints";
import Loading from "../../../../Loading/Loading";
import '../../../../../shared.css';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import './BoiCurrentInterestCard.css';

const BoiCurrentInterestCard = () => {
    const {
        data: currentInterest,
        fetchApi: fetchCurrentInterest,
        isLoading: isInterestLoading,
        error: interestError
    } = useGet();

    useEffect(() => fetchCurrentInterest(Endpoints.CURRENT_INTEREST_ENDPOINT), []);


    return (
        <Loading isLoading={isInterestLoading}>
            <div className="card secondary-bg card-data text-light">
                <div className="card-body pb-0 mb-0">
                    <h5 className="card-title small card-data-header mb-1">
                        ריבית בנק ישראל
                    </h5>
                    <div className="icon-circle accent-bg">
                        <TrendingUpIcon/>
                    </div>
                    <div className="card-text">
                        <p hidden={interestError} className="fs-2">
                            <span hidden={!isInterestLoading} className="font-200 fs-6">טוען..</span>
                            <span hidden={isInterestLoading} className="font-700">
                                {currentInterest?.currentInterest || "אין נתונים"}
                            </span>
                            <span hidden={isInterestLoading}>%</span>
                        </p>
                        <p hidden={!interestError} className="muted-text my-3">
                            אירעה שגיאה בטעינת הנתונים
                            {interestError && interestError.message ? `: ${interestError.message}` : ""}
                        </p>
                    </div>
                </div>
                <div className="card-footer">
                    <p hidden={isInterestLoading || interestError} className="muted-text m-0 p-0">
                        עדכון הבא: &nbsp;
                        {currentInterest?.nextInterestDate ? new Date(currentInterest.nextInterestDate).toLocaleDateString('he-IL') : "אין נתונים"}
                    </p>
                </div>
            </div>
        </Loading>
    )
}

export default BoiCurrentInterestCard;