import './TabMortgageTrack.css';
import CustomTable from "../../../CustomTable/CustomTable";
import {Person} from "@mui/icons-material";
import {mortgageTracksCols} from "../../../../Classes/TestData";
import EditIcon from "@mui/icons-material/Edit";
import Help from "../../../Help/Help";
import {Button, Dropdown, Modal, Row} from "react-bootstrap";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ProgressBar from "../../../ProgressBar/ProgressBar";
import React, {useEffect, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import CustomInput from "../../../CustomInput/CustomInput";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toggle from "../../../Toggle/Toggle";
import NewMortgageGroup from "./NewMortgageGroup";
import NewMortgagePlan from "./NewMortgagePlan";
import {useGet} from "../../../../Classes/RequestHooks";
import Endpoints from "../../../../Classes/Endpoints";
import MortgagePlanTable from "./MortgagePlanTable";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const TabMortgageTrack = () => {
    const [showNewMortgageGroup, setShowNewMortgageGroup] = useState(false);
    const [showNewMortgagePlan, setShowNewMortgagePlan] = useState(false);
    const [selectedGroupName, setSelectedGroupName] = useState(null);
    const {data: mortgageGroupsData, fetchApi: fetchMortgageGroupsData} = useGet();

    useEffect(() => {
        //SUGGEST: try to use optimistic update ui-only to show the data immediately
        setTimeout(() => {
            fetchMortgageGroupsData(Endpoints.MORTGAGE_GROUP_ENDPOINT);
        }, 300);
    }, [showNewMortgageGroup, showNewMortgagePlan]);


    const getNames = () => {
        return mortgageGroupsData?.map((group) => group.groupName);
    }

    const getSelectedGroup = () =>{
        return mortgageGroupsData?.find(group => group.groupName === selectedGroupName);
    }

    return (
        <div className="container-fluid">
            <NewMortgageGroup show={showNewMortgageGroup}
                              setShow={setShowNewMortgageGroup}/>
            <NewMortgagePlan show={showNewMortgagePlan}
                             groupId={getSelectedGroup()?.id}
                             setShow={setShowNewMortgagePlan}/>
            <Row>
                <div className="col col-xl-3">
                    <p className="mb-2 small muted-text">שיעור מימון</p>
                    <ProgressBar currentStep={60} color="#22CC00" totalSteps={100}/>
                </div>
                <div className="col col-xl-3">
                    <p className="mb-2 small muted-text">יחס החזר</p>
                    <ProgressBar currentStep={30} color="#55AA00" totalSteps={100}/>
                </div>
                <div className="col col-xl-6 d-flex justify-content-end align-items-center">
                    <Toggle className="mx-2"
                            defaultHeader="בחירת הצעה"
                            onChange={(e) => setSelectedGroupName(e.target.string)}
                            items={getNames()}/>
                    <button className="accent-bg button"
                            onClick={() => setShowNewMortgagePlan(true)}>
                        מסלול חדש
                        <AddCircleIcon className="me-2"/>
                    </button>
                    <button className="mx-2 accent-bg button"
                            onClick={() => setShowNewMortgageGroup(true)}>
                        הצעה חדשה
                        <LocalOfferIcon className="me-2"/>
                    </button>
                </div>
            </Row>
            <hr/>
            <Row>
                <MortgagePlanTable planGroup={getSelectedGroup()?.mortgagePlans}/>
            </Row>
        </div>
    );
}

export default TabMortgageTrack;