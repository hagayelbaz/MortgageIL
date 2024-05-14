import React from "react";
import LevelManager from "../../components/Levels/LevelManager/LevelManager";

import {levels} from "../../components/Levels/LevelManager/levels";

const HomePage = () => {
    return (
        <div className="vh-100 secondary-bg-light d-flex align-items-center">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-xl-8 col-xxl-6">
                        <LevelManager levels={levels}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;