import {useGet} from "../../../../../Classes/RequestHooks";
import {useEffect} from "react";
import Endpoints from "../../../../../Classes/Endpoints";
import Loading from "../../../../Loading/Loading";
import '../../../../../shared.css';
import AssessmentIcon from "@mui/icons-material/Assessment";
import {ArrowDownwardRounded, ArrowUpwardRounded} from "@mui/icons-material";

const CurrentCpiCard = () => {
    //<editor-fold defaultstate="collapsed" desc="Variables">
    const {
        data: currentCpi,
        fetchApi: fetchCurrentCpi,
        isLoading: isCpiLoading,
        error: cpiError
    } = useGet();
    const {
        data: lastYearCpiChange,
        fetchApi: fetchLastYearCpiChange,
        isLoading: isLastYearCpiChangeLoading,
        error: lastYearCpiChangeError
    } = useGet();
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="UseEffect">
    useEffect(() => {
        fetchCurrentCpi(Endpoints.CURRENT_CPI_ENDPOINT);
        fetchLastYearCpiChange(Endpoints.CPI_LAST_YEAR_CHANGE_ENDPOINT);
    }, []);
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Functions">
    const fixPercentage = (value) => {
        return value ? parseFloat(value).toFixed(2) : "אין נתונים";
    }
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="JSX">
    return (
        <Loading isLoading={isCpiLoading}>
            <div className="card secondary-bg card-data text-light">
                <div className="card-body pb-0 mb-0">
                    <h5 className="card-title small card-data-header mb-1">
                        מדד המחירים לצרכן
                    </h5>
                    <div className="icon-circle text-light bg-danger">
                        <AssessmentIcon/>
                    </div>
                    <div className="card-text mt-3">
                        <p hidden={cpiError} className="mb-0 pb-0">
                            <span hidden={!isCpiLoading} className="font-200 fs-6">טוען..</span>
                            <span hidden={isCpiLoading} className="font-700 fs-2">
                                {fixPercentage(currentCpi?.OBS_VALUE)}%
                                {currentCpi?.OBS_VALUE > 0 &&
                                    <ArrowUpwardRounded fontSize="small" stroke="red" strokeWidth="1.5"/>
                                }
                                {currentCpi?.OBS_VALUE < 0 &&
                                    <ArrowDownwardRounded fontSize="small" stroke="green" strokeWidth="1.5"/>
                                }
                            </span>
                            <span hidden={isCpiLoading} className="muted-text">(מחודש קודם)</span>
                        </p>
                        <p className="mt-0 pt-0">
                            <span hidden={isLastYearCpiChangeLoading || lastYearCpiChangeError} className="muted-text">
                                שינוי ב 12 חודשים אחרונים: &nbsp;{fixPercentage(lastYearCpiChange?.OBS_VALUE)}%
                            </span>
                            <span hidden={!isLastYearCpiChangeLoading} className="muted-text">טוען..</span>
                        </p>

                        <p hidden={!cpiError} className="muted-text my-3">
                            אירעה שגיאה בטעינת הנתונים
                            {cpiError && cpiError.message ? `: ${cpiError.message}` : ""}
                        </p>
                    </div>
                </div>
                <div className="card-footer">
                    <p hidden={isCpiLoading || cpiError} className="muted-text m-0 p-0">
                        עדכון אחרון: &nbsp;{currentCpi?.TIME_PERIOD || "אין נתונים"}
                    </p>
                </div>
            </div>
        </Loading>
    )
    //</editor-fold>
}

export default CurrentCpiCard;