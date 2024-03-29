import React from "react";
import Chart from "../../Chart/Chart";
import {data2, data} from "../../../App";
import {Vars} from "../../../Vars";
import {Col, Row} from "react-bootstrap";

const chartStyle = {
    header: 'fs-5 fw-light',
    percentage: 'fs-6',
    tick: {
        fontSize: 12,
    },
    tooltip: {
        container: 'primary-bg text-dark rounded-2 px-2 py-1',
    }
}

const PortalHome = () => {
    return (
        <div className="container-fluid">
            <Row>
                <div className="col-8">
                    <h1>Home Page</h1>
{/*
                    <Chart chartStyle={chartStyle} data={data} color={Vars.ACCENT_COLOR} header="מדד המחירים לצרכן" countXTicks={4}/>
*/}
                </div>
            </Row>
        </div>
    );
}

export default PortalHome;