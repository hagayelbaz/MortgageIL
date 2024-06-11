import React from "react";
import {Col, Row} from "react-bootstrap";
import "./PortalHome.css";
import BoiCurrentInterestCard from "./Cards/BoiCurrentInterestCard/BoiCurrentInterestCard";
import CurrentCpiCard from "./Cards/CurrentCpiCard/CurrentCpiCard";
import ChartCpiCard from "./Cards/ChartCpiCard/ChartCpiCard";
import ChartBoiInterest from "./Cards/ChartBoiInterest/ChartBoiInterest";


const PortalHome = () => {

    // <editor-fold defaultstate="collapsed desc="Today">
    const getDate = () => {
        const date = new Date();
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    // </editor-fold>

    return (
        <div className="container-fluid overflow-x-hidden p-2 secondary-bg-dark text-light">
            <Row>
                <div className="d-flex justify-content-between px-3 mt-2 muted-text">
                    <p className="fs-5">צהריים טובים חגי</p>
                    <p className="fs-5">
                        {getDate()}
                    </p>
                </div>
                <hr className="p-0 m-0"/>
            </Row>
            <Row className="mt-3">
                <Col className="h-100 mx-0 px-2 col-12 col-md-6 mt-2 mt-md-0 col-xl-3">
                    <CurrentCpiCard/>
                </Col>
                <Col className="h-100 mx-0 px-2 col-12 col-md-6 mt-2 mt-md-0 col-xl-3">
                    <BoiCurrentInterestCard/>
                </Col>
                <Col className="h-100 mx-0 px-2 col-12 col-md-6 col-xl-3 mt-2 mt-xl-0">
                    <BoiCurrentInterestCard/>
                </Col>
                <Col className="h-100 mx-0 px-2 col-12 col-md-6 col-xl-3 mt-2 mt-xl-0">
                    <BoiCurrentInterestCard/>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col className="h-100 mx-0 px-2 col-12 col-xl-6">
                    <ChartCpiCard />
                </Col>
                <Col className="h-100 mx-0 px-2 col-12 mt-md-2 mt-xl-0 col-xl-6">
                    <ChartBoiInterest />
                </Col>
            </Row>
        </div>
    );
}

export default PortalHome;