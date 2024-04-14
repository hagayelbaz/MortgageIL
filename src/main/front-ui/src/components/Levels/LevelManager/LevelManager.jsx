import React, {Fragment, useEffect, useState} from "react";
import './LevelManager.css';
import HandleLevels from "./handleLevels";
import {Button} from "react-bootstrap";
import {MultiConditionalWrapper} from "../../Utils/ConditionalWrapper";
import LevelControl from "./LevelControl/LevelControl";
import wrapperVars from "../Wrappers";



const LevelManager = ({levelData}) => {
    const [currentLevels, setCurrentLevels] = useState([levelData.levels[0]]);
    const [history, setHistory] = useState([]);
    const handleLevels = new HandleLevels(history, levelData, currentLevels);


    const nextLevel = (level, item) => setHistory(handleLevels.updateHistory(level, item));
    const previousLevel = () => setHistory(handleLevels.getPreviousLevel());

    useEffect(() => setCurrentLevels(handleLevels.updateLevelFromHistory()), [history]);


    const isToShow = (index, item) => {
        const selected = history[history.length - 1]?.selected;
        const allowed = handleLevels.getLastLevelFromHistory()?.items.find(i => i.id === selected)?.nextLevelInclude;

        return allowed === undefined || (allowed.includes(item.id) || allowed.includes(0));
    }

    const determineIfSelected = (level, item) => {
        return level === item.id;//TODO: fix this
    };

    return (
        <div className="position-relative primary-bg p-3 rounded-2">
            {currentLevels.map((level, levelIndex) => (
                <Fragment key={levelIndex}>
                    <h1 className="text-center py-2 fw-light">{level.name}</h1>
                    <div className="progress" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                             aria-valuemax="100" style={{width: `${32}%`}}></div>
                    </div>
                    <div>
                        <MultiConditionalWrapper {...wrapperVars(level)}>
                            {level.items.map((item, index) =>
                                isToShow(index, item) && (
                                    <LevelControl key={index} level={level}
                                                  isSelected={determineIfSelected(level, item)}
                                                  levelType={level.levelOrder}
                                                  item={item}
                                                  nextLevelClicked={nextLevel}/>))}
                        </MultiConditionalWrapper>
                    </div>
                </Fragment>
            ))}

            <div className="my-3 mt-5 d-flex justify-content-between px-3">
                {history.length > 0 && (
                    <button className="btn btn-link px-5" onClick={previousLevel}>הקודם</button>
                )}
                <Button className="px-5" onClick={previousLevel}>הבא</Button>
            </div>
        </div>
    );
};

export default LevelManager;
