import React from 'react';
import HelpIcon from "./components/HelpIcon/HelpIcon";
import {Col, Container, Form, Row} from "react-bootstrap";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";


function App() {
    const options = {
        'link': 'https://google.com',
        'text': 'השם שלי זה חגי אלבז ואני רוצה להציג קישור לגוגל כאן רק לבדיקה אם זה עובר שורה אי פעם אני רואה שלא, זה לא לעניין...',
        'textLink': 'גוגל'
    }



    return (
        <Container className="">
            <Row className="" style={{height: '25vh'}}></Row>
            <Row className="">
                <MultiStepForm onFormSubmit={() => {}}>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea name="message" rows="3" />
                    </div>
                </MultiStepForm>
            </Row>
        </Container>
    );
}

export default App;
