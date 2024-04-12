import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import Portal from "../../components/Portal/Portal";
import PortalHome from "../../components/Portal/PortalHome/PortalHome";
import PortalReminders from "../../components/Portal/PortalReminders/PortalReminders";

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="portal/*" element={<Portal/>}>
                <Route index path="" element={<PortalHome/>}/>
                <Route path="reminders" element={<PortalReminders/>}/>
            </Route>
        </Routes>
    );
}

export default MainRoute;