import './DataCard.css'
import {ArrowDropUp} from "@mui/icons-material";


const DataCard = ({ header }) => {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="row p-0 m-0">
                <div className="col p-0 m-0">
                    <div className="card secondary-bg card-data">
                        <div className="card-body p-3 pb-0 text-light">
                            <h5 className="card-title small card-data-header">
                                {header}
                            </h5>
                            <div className="card-text ">
                                <div className="container-fluid p-0 m-0">
                                    <div className="row">
                                        <div className="col">
                                            <p className="p-0 m-0 mt-3">
                                                <span className="fs-2 fw-bold ">122.3</span>
                                                <span className="fs-4">K</span>
                                            </p>
                                            <p className="p-0 mt-0">
                                                משתמשים
                                            </p>
                                            <p className="p-0 mt-5">
                                                <ArrowDropUp className="text-success p-0"/>
                                                <span className="text-success fw-bold small p-0">12%</span>
                                                <span className="small px-1"> מהחודש שעבר</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataCard;