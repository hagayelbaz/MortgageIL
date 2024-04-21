import React from "react";
import {Col, Row} from "react-bootstrap";
import DataCard from "../../DataCard/DataCard";
import CardCPI from "./Cards/CardCPI/CardCPI";
import CardNews from "./Cards/CardNews/CardNews";
import "./PortalHome.css";
import CustomTable from "../../CustomTable/CustomTable";
import {chartData, colData, mortgageFile, tableData, testNews} from "../../../Classes/TestData";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMortgageFile from "./Cards/CardMortgageFile/CardMortgageFile";


const PortalHome = () => {
    const getDate = () => {
        const date = new Date();
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    return (
        <div className="container-fluid overflow-x-hidden p-2 secondary-bg-dark text-light">
            <Row>
                <div className="d-flex justify-content-between px-2">
                    <p className="fs-5">צהריים טובים חגי</p>
                    <p className="fs-5">
                        {getDate()}
                    </p>
                </div>
                <hr className="p-0 m-0"/>
            </Row>

            <Row className="mt-2 p-3 flex-container">
                <Col className="col-5">
                    <div className="h-100 flex-item">
                        <CardCPI data={chartData}/>
                    </div>
                </Col>
                <Col className="col-4">
                    <div className="h-100 flex-item">
                        <CardNews newsArr={testNews}/>
                    </div>
                </Col>
                <Col className="col-3">
                    <div className="h-100 flex-item">
                        <CardMortgageFile mortgageFile={mortgageFile}/>
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


            <Row className="mt-4 p-3">
                <Col>
                    <DataCard header={"הכנסות (שנה אחרונה)"}/>
                </Col>
                <Col>
                    <DataCard header={"הוצאות (ממש השניה)"}/>
                </Col>
            </Row>
        </div>
    );
}

export default PortalHome;