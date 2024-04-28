import {Tab, Tabs} from "react-bootstrap";
import {useEffect, useState} from "react";
import './PortalMortgageTrack.css';
import TabMortgageTrack from "./TabMortgageTrack/TabMortgageTrack";
import {mortgageTracks} from "../../../Classes/TestData";

const PortalMortgageTrack = () => {
    const [key, setKey] = useState('home');

    useEffect(() => {

    }, []);

    return (
        <div className="container-fluid secondary-bg-dark p-0 py-1 m-0 overflow-x-hidden">
            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                fill
            >
                <Tab eventKey="home" title="מסלולים">
                    <TabMortgageTrack mortgageTracks={mortgageTracks}/>
                </Tab>
                <Tab eventKey="borad" title="לוח תשלומים">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="analist" title="ניתוח תיק">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="docs" title="מסמכים">
                    Tab content for Profile
                </Tab>
            </Tabs>
        </div>
    );
}

export default PortalMortgageTrack;