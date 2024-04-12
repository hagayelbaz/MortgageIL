import React, {Fragment, useEffect, useState} from "react";
import './LevelManager.css';
import LevelControlButtonContainer
    from "../Controls/LevelButton/LevelControlButtonContainer/LevelControlButtonContainer";
import HandleLevels from "./handleLevels";
import {Button} from "react-bootstrap";
import {MultiConditionalWrapper} from "../../Utils/ConditionalWrapper";
import LevelControlInputContainer from "../Controls/LevelInput/LevelControlInputContainer/LevelControlInputContainer";
import LevelControl from "./LevelControl/LevelControl";


const wrapperVars = (level) => {
    return {
        conditions: [level.levelOrder === 'buttons', level.levelOrder === 'inputs'],
        wrappers: [<LevelControlButtonContainer/>, <LevelControlInputContainer/>]
    }
}

const LevelManager = ({levelData}) => {
    const [currentLevels, setCurrentLevels] = useState([levelData.levels[0]]);
    const [history, setHistory] = useState([]);
    const handleLevels = new HandleLevels(history, levelData, currentLevels)


    const nextLevel = (level, item) => setHistory(handleLevels.updateHistory(level, item));
    const previousLevel = () => setHistory(handleLevels.getPreviousLevel());

    useEffect(() => setCurrentLevels(handleLevels.updateLevelFromHistory()), [history]);


    const isToShow = (index, item) => {
        const selected = history[history.length - 1]?.selected;
        const allowed = handleLevels.getLastLevelFromHistory()?.items.find(i => i.id === selected)?.nextLevelInclude;

        return allowed === undefined || (allowed.includes(item.id) || allowed.includes(0));
    }

    const determineIfSelected = (item) => {
        const selected = history[history.length - 1]?.selected;
        return selected === item.id;
    };

    return (
        <div className="position-relative primary-bg p-3 rounded-2">
            {currentLevels.map((level, levelIndex) => (
                <Fragment key={levelIndex}>
                    <h1 className="text-center py-2 fw-bold">{level.name}</h1>
                    <i role="button" className="position-absolute secondary-color fs-1 top-0 mt-3"/>

                    <div>
                        <MultiConditionalWrapper {...wrapperVars(level)}>
                            {level.items.map((item, index) =>
                                isToShow(index, item) && (
                                    <LevelControl key={index} level={level}
                                                  isSelected={determineIfSelected(item)}
                                                  levelType={level.levelOrder}
                                                  item={item} nextLevelClicked={nextLevel}/>))}
                        </MultiConditionalWrapper>
                    </div>
                </Fragment>
            ))}

            <div className="my-3 mt-5 d-flex justify-content-between px-3">
                <button className="btn btn-link px-5" onClick={previousLevel}>הקודם</button>
                <Button className="px-5 disabled" onClick={previousLevel}>הבא</Button>
            </div>
        </div>
    );
};

export default LevelManager;
