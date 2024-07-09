import {Form, Popover} from "react-bootstrap";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import InputGroup from "react-bootstrap/InputGroup";
import React, {useEffect, useState} from "react";

const OverlayContent = ({setShowOverlay, startDate, setStartDate, endDate, setEndDate}) => {
    const [tmpStartDate, setTmpStartDate] = useState(startDate);
    const [tmpEndDate, setTmpEndDate] = useState(endDate);

    const formatDate = (date) => date.toISOString().substring(0, 10);
    const onStartDateChange = (e) => setTmpStartDate(convertDate(e));
    const onEndDateChange = (e) => setTmpEndDate(convertDate(e));
    const convertDate = (e) => {
        const dateValue = e.target.value;
        if (dateValue && dateValue.match(/^\d{4}-\d{2}-\d{2}$/)) {
            return new Date(dateValue);
        }
    }
    const onFilterClickPr = () => {
        setStartDate(tmpStartDate);
        setEndDate(tmpEndDate);
    }

    useEffect(() => {
        setTmpStartDate(startDate);
        setTmpEndDate(endDate);
    }, [startDate, endDate]);

    return (
        <Popover className="secondary-bg-light text-light border-2">
            <Popover.Header className="secondary-bg-light" as="h3">
                <div className="d-flex justify-content-between">
                    <p className="p-0 m-0 pt-1 fs-5"> סינון תאריך</p>
                    <HighlightOffIcon onClick={() => setShowOverlay(false)}
                                      role="button"/>
                </div>
            </Popover.Header>
            <Popover.Body className="">
                <div dir="ltr">
                    <InputGroup className="mb-3">
                        <Form.Control className="secondary-bg text-light" type="date"
                                      onChange={onStartDateChange}
                                      value={formatDate(tmpStartDate)}/>
                        <InputGroup.Text
                            className="secondary-bg text-light">מתאריך</InputGroup.Text>
                    </InputGroup>
                </div>
                <div dir="ltr">
                    <InputGroup className="mb-3">
                        <Form.Control className="secondary-bg text-light" type="date"
                                      onChange={onEndDateChange}
                                      value={formatDate(tmpEndDate)}/>
                        <InputGroup.Text
                            className="secondary-bg text-light">עד תאריך</InputGroup.Text>
                    </InputGroup>
                </div>
                <div className="text-center mt-2">
                    <button onClick={onFilterClickPr} className="btn secondary-bg text-light px-5">
                        סנן
                    </button>
                </div>
            </Popover.Body>
        </Popover>
    )
}

export default OverlayContent;