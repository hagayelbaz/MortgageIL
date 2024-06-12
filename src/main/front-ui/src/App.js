import React from 'react';
import './shared.css';
import {BrowserRouter} from "react-router-dom";
import MainRoute from "./Routes/MainRoute/MainRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
    return (
        <BrowserRouter basename="/portal">
            <MainRoute/>
        </BrowserRouter>
    );
}

export default App;
