import React, {useEffect} from 'react';
import Chart from "./components/Chart/Chart";
import './shared.css';
import Portal from "./components/Portal/Portal";
import {BrowserRouter} from "react-router-dom";
import MainRoute from "./Routes/MainRoute/MainRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const data = [
    {
        "date": "1998-01-31T22:00:00.000Z",
        "value": 100
    },
    {
        "date": "1998-02-28T22:00:00.000Z",
        "value": 100.4
    },
    {
        "date": "1998-03-31T21:00:00.000Z",
        "value": 100.2
    },
    {
        "date": "1998-04-30T21:00:00.000Z",
        "value": 100.7
    },
    {
        "date": "1998-05-31T21:00:00.000Z",
        "value": 100.5
    },
    {
        "date": "1998-06-30T21:00:00.000Z",
        "value": 101
    },
    {
        "date": "1998-07-31T21:00:00.000Z",
        "value": 101.5
    },
    {
        "date": "1998-08-31T21:00:00.000Z",
        "value": 100.8
    },
    {
        "date": "1998-09-30T22:00:00.000Z",
        "value": 100.9
    },
    {
        "date": "1998-10-31T22:00:00.000Z",
        "value": 100.2
    },
    {
        "date": "1998-11-30T22:00:00.000Z",
        "value": 100.5
    },
    {
        "date": "1998-12-31T22:00:00.000Z",
        "value": 100
    },
    {
        "date": "1999-01-31T22:00:00.000Z",
        "value": 99.7
    },
    {
        "date": "1999-02-28T22:00:00.000Z",
        "value": 99.5
    },
    {
        "date": "1999-03-31T22:00:00.000Z",
        "value": 99.8
    },
    {
        "date": "1999-04-30T21:00:00.000Z",
        "value": 99.9
    },
    {
        "date": "1999-05-31T21:00:00.000Z",
        "value": 100.3
    },
    {
        "date": "1999-06-30T21:00:00.000Z",
        "value": 100.5
    },
    {
        "date": "1999-07-31T21:00:00.000Z",
        "value": 100.4
    },
    {
        "date": "1999-08-31T21:00:00.000Z",
        "value": 100.2
    },
    {
        "date": "1999-09-30T22:00:00.000Z",
        "value": 100.6
    },
    {
        "date": "1999-10-31T22:00:00.000Z",
        "value": 100.7
    },
    {
        "date": "1999-11-30T22:00:00.000Z",
        "value": 100.5
    },
    {
        "date": "1999-12-31T22:00:00.000Z",
        "value": 100.3
    },
    {
        "date": "2000-01-31T22:00:00.000Z",
        "value": 101.3
    },
    {
        "date": "2000-02-29T22:00:00.000Z",
        "value": 101.5
    },
    {
        "date": "2000-03-31T22:00:00.000Z",
        "value": 101.7
    },
    {
        "date": "2000-04-30T21:00:00.000Z",
        "value": 100.9
    },
    {
        "date": "2000-05-31T21:00:00.000Z",
        "value": 100.8
    },
    {
        "date": "2000-06-30T21:00:00.000Z",
        "value": 100.5
    },
    {
        "date": "2000-07-31T21:00:00.000Z",
        "value": 100.2
    },
    {
        "date": "2000-08-31T21:00:00.000Z",
        "value": 100.3
    },
    {
        "date": "2000-09-30T21:00:00.000Z",
        "value": 100.5
    },
    {
        "date": "2000-10-31T22:00:00.000Z",
        "value": 100.7
    },
    {
        "date": "2000-11-30T22:00:00.000Z",
        "value": 101
    },
    {
        "date": "2000-12-31T22:00:00.000Z",
        "value": 101.2
    },
    {
        "date": "2001-01-31T22:00:00.000Z",
        "value": 101.5
    },
    {
        "date": "2001-02-28T22:00:00.000Z",
        "value": 101.7
    },
    {
        "date": "2001-03-31T22:00:00.000Z",
        "value": 101.9
    },
    {
        "date": "2001-04-30T21:00:00.000Z",
        "value": 102.1
    },
    {
        "date": "2001-05-31T21:00:00.000Z",
        "value": 101
    },
    {
        "date": "2001-06-30T21:00:00.000Z",
        "value": 101.2
    },
    {
        "date": "2001-07-31T21:00:00.000Z",
        "value": 101.5
    },
    {
        "date": "2001-08-31T21:00:00.000Z",
        "value": 101
    },
    {
        "date": "2001-09-30T22:00:00.000Z",
        "value": 100.9
    },
    {
        "date": "2001-10-31T22:00:00.000Z",
        "value": 101
    },
    {
        "date": "2001-11-30T22:00:00.000Z",
        "value": 101.2
    },
    {
        "date": "2001-12-31T22:00:00.000Z",
        "value": 101.5
    },
    {
        "date": "2002-01-31T22:00:00.000Z",
        "value": 101.7
    },
    {
        "date": "2002-02-28T22:00:00.000Z",
        "value": 101.6
    },
    {
        "date": "2002-03-31T21:00:00.000Z",
        "value": 101.5
    }
];


function App() {

    return (
        <BrowserRouter>
            <MainRoute/>
        </BrowserRouter>
    );
}

export default App;
