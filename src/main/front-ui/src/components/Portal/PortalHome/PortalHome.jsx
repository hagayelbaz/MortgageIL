import React, {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import "./PortalHome.css";
import BoiCurrentInterestCard from "./Cards/BoiCurrentInterestCard/BoiCurrentInterestCard";
import CurrentCpiCard from "./Cards/CurrentCpiCard/CurrentCpiCard";


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
                <div className="d-flex justify-content-between px-3 muted-text">
                    <p className="fs-5">צהריים טובים חגי</p>
                    <p className="fs-5">
                        {getDate()}
                    </p>
                </div>
                <hr className="p-0 m-0"/>
            </Row>
            <Row className="mt-3">
                <Col className="h-100 mx-0 px-2">
                    <CurrentCpiCard/>
                </Col>
                <Col className="h-100 mx-0 px-2">
                    <BoiCurrentInterestCard/>
                </Col>
                <Col className="h-100 mx-0 px-2">
                    <BoiCurrentInterestCard/>
                </Col>
            </Row>

        </div>
    );
}

export default PortalHome;