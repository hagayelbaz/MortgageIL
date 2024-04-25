import React, {cloneElement, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../shared.css';
import './Help.css';
import {Button, Col, Container, Form, OverlayTrigger, Popover, Row} from "react-bootstrap";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import InputGroup from "react-bootstrap/InputGroup";

const popover = () => {

    return (
        <Popover className="secondary-bg-light text-light border-2">
            <Popover.Header className="secondary-bg-light" as="h3">
                <h1>HIIII</h1>
            </Popover.Header>
            <Popover.Body className="">
                <p>
                    some text
                </p>
            </Popover.Body>
        </Popover>
    )
};

function Help({header, text, trigger, children, toShow}) {
    const [showBubble, setShowBubble] = useState(false);

    const handleToggle = () => setShowBubble(!showBubble);
    const triggerElement = cloneElement(trigger,
        {
            onClick: handleToggle
        });

    return(
        <OverlayTrigger show={toShow}
                        placement="bottom" overlay={popover()}>
            {triggerElement}
        </OverlayTrigger>
    )
}

export default Help;
