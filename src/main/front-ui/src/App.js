import React, {useEffect} from 'react';
import './shared.css';
import {BrowserRouter} from "react-router-dom";
import MainRoute from "./Routes/MainRoute/MainRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {useGet} from "./Classes/RequestHooks";
import {TokenProvider} from "./Provider/TokenProvider";
import {UserDataProvider} from "./Provider/UserDataProvider";
import {NotificationProvider} from "./Provider/NotificationProvider";
import NotificationContainer from "./components/Notification/Notification";

function App() {
    return (
        <TokenProvider>
            <UserDataProvider>
                <NotificationProvider>
                    <NotificationContainer/>
                    <BrowserRouter basename="/portal">
                        <MainRoute/>
                    </BrowserRouter>
                </NotificationProvider>
            </UserDataProvider>
        </TokenProvider>
    );
}

export default App;
