import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../shared.css';
import './HelpIcon.css';
import {Col, Container, Row} from "react-bootstrap";

function HelpIcon({link, textLink, text, textOption, linkOption, iconOption, bubbleDir}) {
    const [showBubble, setShowBubble] = useState(false);
    const [classBubbleDir, setBubbleDir] = useState(bubbleDir === 'left' ? 'bubble-left' : 'bubble-right');

    useEffect(() => {
        bubbleDir = bubbleDir ? bubbleDir : 'left';
    }, []);

    useEffect(() => {
        setBubbleDir(bubbleDir === 'left' ? 'bubble-left' : 'bubble-right');
    }, [bubbleDir]);


    return (
        <Container className="position-relative text-end" dir={'rtl'}>
            <button className={`${iconOption ? iconOption : ''} bi bi-question-circle button-no-style help-icon`}
                    onClick={() => setShowBubble(!showBubble)}>
            </button>
            {showBubble && (
                <Container
                    className={`${classBubbleDir} col-8 col-md-10 col-lg-8 position-absolute container-fluid help-bubble p-2 rounded-4`}>
                    <Row>
                        <Col className="col-auto">
                            <p className={`${textOption ? textOption : ''} p-0 m-0`}>{text}</p>
                            <a className={linkOption ? linkOption : ''} href={link} target='_blank'>{textLink}</a>
                        </Col>
                    </Row>
                </Container>
            )}
        </Container>
    );
}

export default HelpIcon;
