import React from "react";
import LevelManager from "../../components/Levels/LevelManager/LevelManager";
import levelData from "../../assets/Levels.json";
import {Container} from "react-bootstrap";

const HomePage = () => {
    return (
        <div className="vh-100 d-flex align-items-center">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-xl-8 col-xxl-6">
                        <LevelManager levelData={levelData}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;