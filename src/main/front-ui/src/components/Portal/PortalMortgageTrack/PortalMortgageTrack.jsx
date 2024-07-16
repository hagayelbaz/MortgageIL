import {Tab, Tabs} from "react-bootstrap";
import {useEffect, useState} from "react";
import './PortalMortgageTrack.css';
import TabMortgageTrack from "./TabMortgageTrack/TabMortgageTrack";
import TabAmortizationSchedule from "./TabAmortizationSchedule/TabAmortizationSchedule";

const PortalMortgageTrack = () => {
    const [key, setKey] = useState('home');


    return (
        <div className="container-fluid secondary-bg-dark p-0 m-0 d-flex flex-column vh-100">
            <div className="sticky-top bg-light secondary-bg-dark">
                <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-0 secondary-bg-dark"
                    fill
                >
                    <Tab eventKey="home" title="מסלולים"/>
                    <Tab eventKey="board" title="לוח תשלומים"/>
                    <Tab eventKey="analist" title="ניתוחים והשוואות"/>
                    <Tab eventKey="docs" title="מסמכים"/>
                </Tabs>
            </div>
            <div className="flex-grow-1 overflow-y-auto overflow-x-hidden pt-3">
                {key === "home" && <TabMortgageTrack/>}
                {key === "board" && <TabAmortizationSchedule key={key}/>}
                {key === "analist" && <div>Tab content for ניתוחים והשוואות</div>}
                {key === "docs" && <div>Tab content for מסמכים</div>}
            </div>
        </div>
    );
}

export default PortalMortgageTrack;