import React from "react";
import {Col, Row} from "react-bootstrap";
import DataCard from "../../DataCard/DataCard";
import CardCPI from "./Cards/CardCPI/CardCPI";
import CardNews from "./Cards/CardNews/CardNews";
import "./PortalHome.css";
import CustomTable from "../../CustomTable/CustomTable";
import {chartData, colData, tableData, testNews, mortgageAccStatus} from "../../../Classes/TestData";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardAccountStatus from "./Cards/CardAccountStatus/CardAccountStatus";


const PortalHome = () => {
    // <editor-fold defaultstate="collapsed desc="Table Data">
    const getDate = () => {
        const date = new Date();
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    // </editor-fold>

    return (
        <div className="container-fluid overflow-x-hidden p-2 secondary-bg-dark text-light">
            <Row>
                <div className="d-flex justify-content-between px-3 muted-text">
                    <p className="fs-5">צהריים טובים חגי</p>
                    <p className="fs-5">
                        {getDate()}
                    </p>
                </div>
                <hr className="p-0 m-0"/>
            </Row>

            <Row className="mt-2 p-3 flex-container">
                <Col className="col-12 col-md-8 col-xl-5 order-0">
                    <div className="h-100 flex-item">
                        <CardCPI data={chartData}/>
                    </div>
                </Col>
                <Col className="mt-3 mt-md-0 col-6 col-md-4 col-xl-3 order-2 order-md-1">
                    <div className="h-100 flex-item">
                        <CardAccountStatus mortgageStatus={mortgageAccStatus}/>
                    </div>
                </Col>
                {/* this for control the height of the news card */}
                <div className="d-block d-md-none col-1 mt-3 spacial-news-divide">
                    <div className="h-100 flex-item accent-bg rounded-2">
                    </div>
                </div>
                <Col className="mt-3 mt-xl-0 col-11 col-md-8 col-xl-4 order-1 order-md-3 order-xl-2">
                    <div className="h-100 flex-item">
                        <CardNews newsArr={testNews}/>
                    </div>
                </Col>
                <Col className="mt-3 col-6 col-md-4 order-3 order-md-2 order-xl-3">
                    <div className="h-100 flex-item">
                        <CardAccountStatus mortgageStatus={mortgageAccStatus}/>
                    </div>
                </Col>
                <Col className="mt-3 col-6 col-xl-4 order-4">
                    <div className="h-100 flex-item">
                        <DataCard header={"הכנסות (שנה אחרונה)"}/>
                    </div>
                </Col>
                <Col className="mt-3 col-6 col-xl-4 order-5">
                    <div className="h-100 flex-item">
                        <DataCard header={"הוצאות (ממש השניה)"}/>
                    </div>
                </Col>
            </Row>

            <Row className="p-3">
                <Col>
                    <div className="card-data secondary-bg rounded-2">
                        <CustomTable data={tableData}
                                     spacialIcon={(row) => (
                                         <MoreVertIcon role="button" onClick={() => console.log(row)}/>
                                     )}
                                     columns={colData}/>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default PortalHome;