import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import Portal from "../../components/Portal/Portal";
import PortalHome from "../../components/Portal/PortalHome/PortalHome";
import PortalReminders from "../../components/Portal/PortalReminders/PortalReminders";
import PortalBorrowers from "../../components/Portal/PortalBorrowers/PortalBorrowers";
import PortalMortgageTrack from "../../components/Portal/PortalMortgageTrack/PortalMortgageTrack";
import PortalPersonalData from "../../components/Portal/PortalPersonalData/PortalPersonalData";
import PortalMortgageData from "../../components/Portal/PortalMortgageData/PortalMortgageData";

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/details" element={<HomePage/>} />
            <Route path="*" element={<Portal/>}>
                <Route index path="" element={<PortalHome/>}/>
                <Route path="my-mortgage" element={<PortalMortgageData/>}/>
                <Route path="personal" element={<PortalPersonalData/>}/>
                <Route path="mortgageTrack" element={<PortalMortgageTrack/>}/>
                <Route path="borrowers" element={<PortalBorrowers/>}/>
                <Route path="reminders" element={<PortalReminders/>}/>
            </Route>
        </Routes>
    );
}

export default MainRoute;