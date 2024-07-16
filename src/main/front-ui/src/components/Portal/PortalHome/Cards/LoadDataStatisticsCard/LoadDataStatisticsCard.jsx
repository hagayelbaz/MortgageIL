import Help from "../../../../Help/Help";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import React from "react";
import Pie from "../../../../Pie/Pie";
import HalfPie from "../../../../Pie/HalfPie";
import ProgressBar from "../../../../ProgressBar/ProgressBar";


const LoadDataStatisticsCard = () => {

    return (
        <div className="card secondary-bg card-data text-light h-100">
            <div className="card-body pb-0 mb-0">
                <h5 className="card-title card-data-header fs-4 fw-lighter p-0 m-0">
                    <span>התיק שלי</span>
                    <Help text="ממוצע זה " className="mx-1">
                        <HelpOutlineIcon className="muted-color"/>
                    </Help>
                </h5>
                <hr/>
                <div className="card-text mt-3 container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <HalfPie text="חוזק תיק" color={"#FF0000"} percentage={38}/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <small className="p-0">שיעור מימון</small>
                        <ProgressBar color={"#FF0000"} pos='out' lineHeight='10px' textClass='small' currentStep={38}/>
                    </div>
                    <div className="row mt-2">
                        <small className="p-0">יחס החזר</small>
                        <ProgressBar color={"#FF0000"} pos='out' lineHeight='10px' textClass='small' currentStep={60}/>
                    </div>
                    <div className="row mt-2">
                        <small className="p-0">חוזק פרופיל</small>
                        <ProgressBar color={"#00FF00"} pos='out' lineHeight='10px' textClass='small' currentStep={60}/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LoadDataStatisticsCard;