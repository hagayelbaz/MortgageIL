import HelpOutlineIcon from '@mui/icons-material/HelpOutline';import ProgressBar from "../../../../ProgressBar/ProgressBar";
import Pie from "../../../../Pie/Pie";
import Help from "../../../../Help/Help";
import {useState} from "react";


const CardAccountStatus = ({mortgageStatus}) => {
    const [toShow, setToShow] = useState(false);

    const toggleShow = () => {
        setToShow(!toShow);
    }

    return (
        <div className="card-data secondary-bg rounded-2 h-100 p-3">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="my-auto fs-4 fw-light">מצב תיק</h3>
                <Help toShow={toShow}>
                    <HelpOutlineIcon onClick={toggleShow} className="muted-text" role='button'/>
                </Help>
            </div>
            <hr/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <Pie percentage={80} colour='green' text={'מעולה'}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="mb-2 small muted-text">
                            <span>יחס החזר</span>
                        </p>
                        <ProgressBar currentStep={mortgageStatus.DTI.value * 100}
                                     color={mortgageStatus.DTI.color}
                                     totalSteps={100}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="my-2 small muted-text">
                            <span>שיעור מימון</span>
                        </p>
                        <ProgressBar currentStep={mortgageStatus.LTV.value * 100}
                                     color={mortgageStatus.LTV.color}
                                     totalSteps={100}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardAccountStatus;