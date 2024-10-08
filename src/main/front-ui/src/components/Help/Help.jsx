import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../shared.css';
import './Help.css';
import {OverlayTrigger, Popover} from "react-bootstrap";

const popover = (header, text) => {

    return (
        <Popover className="secondary-bg-light p-0 border-2 position-fixed">
            <Popover.Header className="secondary-bg-light text-light p-2" as="h3">
                {header}
            </Popover.Header>
            <Popover.Body className="p-2 text-light">
                {text}
            </Popover.Body>
        </Popover>
    )
};

function useTooltip() {
    const [visible, setVisible] = useState(false);

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return {visible, show, hide};
}


function Help({className, children, header, text, placement = 'bottom'}) {
    const {visible, show, hide} = useTooltip();


    return (
        <OverlayTrigger show={visible}
                        placement={placement}
                        overlay={popover(header, text)}>
            <div role="button"
                 className={`d-inline ${className}`}
                 onMouseEnter={show}
                 onMouseLeave={hide}>
                {children}
            </div>
        </OverlayTrigger>
    )
}

export default Help;
