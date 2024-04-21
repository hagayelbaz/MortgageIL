import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Pie, PieChart, ResponsiveContainer} from "recharts";
import {data01Chart, data02Chart} from "../../../../../Classes/TestData";
import ProgressBar from "../../../../ProgressBar/ProgressBar";


const CardMortgageFile = ({mortgageFile}) => {

    return (
        <div className="card-data secondary-bg rounded-2 h-100 p-2">
            <div className="d-flex justify-content-between align-items-center">
                <p className="my-auto">נתוני משכנתא</p>
                <MoreVertIcon role="button"/>
            </div>
            <hr/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <p className="mb-2 small muted-text">
                            <span>החזר חודשי</span>
                            <span> {mortgageFile.monthlyPayment}$</span>
                        </p>
                        <ProgressBar currentStep={mortgageFile.monthlyPayment / mortgageFile.loanAmount * 100}
                                     totalSteps={2}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="mb-2 small muted-text">
                            <span>יחס החזר מהכנסה</span>
                        </p>
                        <ProgressBar currentStep={38}
                                     totalSteps={100}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="mb-2 small muted-text">
                            <span>החזר חודשי</span>
                            <span> {mortgageFile.monthlyPayment}$</span>
                        </p>
                        <ProgressBar currentStep={mortgageFile.monthlyPayment / mortgageFile.loanAmount * 100}
                                     totalSteps={2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardMortgageFile;