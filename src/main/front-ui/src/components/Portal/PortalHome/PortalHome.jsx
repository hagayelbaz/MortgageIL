import React, {useContext, useEffect} from "react";
import {Button, Col, Row} from "react-bootstrap";
import "./PortalHome.css";
import BoiCurrentInterestCard from "./Cards/BoiCurrentInterestCard/BoiCurrentInterestCard";
import CurrentCpiCard from "./Cards/CurrentCpiCard/CurrentCpiCard";
import ChartCpiCard from "./Cards/ChartCpiCard/ChartCpiCard";
import ChartBoiInterest from "./Cards/ChartBoiInterest/ChartBoiInterest";
import PortalHomeHeader from "./PortalHomeHeader/PortalHomeHeader";
import TheBestBankCard from "./Cards/TheBestBankCard/TheBestBankCard";
import BankAverageInterestCard from "./Cards/BankAverageInterestCard/BankAverageInterestCard";
import withFetch from "../../HOC/withFetch";
import Endpoints from "../../../Classes/Endpoints";
import TableBanksInterest from "./Cards/TableBanksInterest/TableBanksInterest";
import BanksCard from "./Cards/BanksCard/BanksCard";
import {useGet} from "../../../Classes/RequestHooks";
import {UserDataContext} from "../../../Provider/UserDataProvider";
import LoadDataStatisticsCard from "./Cards/LoadDataStatisticsCard/LoadDataStatisticsCard";

const PortalHome = () => {
    const BankAverageInterest = withFetch(BankAverageInterestCard);
    const BanksInterest = withFetch(TableBanksInterest);
    const BanksCards = withFetch(BanksCard);

    // <editor-fold defaultstate="collapsed desc="Today">
    const getDate = () => {
        const date = new Date();
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    // </editor-fold>


    return (
        <div className="container-fluid overflow-x-hidden secondary-bg-dark text-light">
            <Row className="sticky-top">
                <PortalHomeHeader/>
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
                    <TheBestBankCard/>
                </Col>
                <Col className="h-100 mx-0 px-2 col-12 col-md-6 col-xl-3 mt-2 mt-xl-0">
                    <BoiCurrentInterestCard/>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col className="h-100 mx-0 px-2 col-12 col-md-6">
                    <ChartCpiCard/>
                </Col>
                <Col className="h-100 mx-0 px-2 col-12 mt-md-2 mt-xl-0 col-md-6">
                    <ChartBoiInterest/>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col className="h-100 mx-0 px-2 col-12 mt-md-2 mt-xl-0 col-xl-8">
                    <BankAverageInterest endpoint={Endpoints.BANK.MORTGAGE.addQueryParam("mortgage","irr")}/>
                </Col>
                <Col className="mx-0 px-2 col-12 mt-md-2 mt-xl-0 col-xl-4">
                    <LoadDataStatisticsCard/>
                </Col>
            </Row>

            <Row className="mt-2 mb-3 d-flex align-items-stretch">
                <Col className="px-2 mt-2 mt-xl-0 col-12 col-md-4">
                    <BanksCards endpoint={Endpoints.BANK.ALL_BANKS} />
                </Col>
                <Col className="px-2 mt-2 mt-xl-0 col-12 col-md-8">
                    <BanksInterest endpoint={Endpoints.BANK.ALL_BANKS} />
                </Col>
            </Row>
        </div>
    );
}

export default PortalHome;

