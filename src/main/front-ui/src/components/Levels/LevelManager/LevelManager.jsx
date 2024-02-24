import React, {useEffect, useState} from "react";
import './LevelManager.css';
import {Button} from "react-bootstrap";
import LevelControlButtonContainer from "../Controls/LevelButton/LevelControlButtonContainer/LevelControlButtonContainer";
import LevelControlButton from "../Controls/LevelButton/LevelControlButton/LevelControlButton";
import HandleLevels from "./handleLevels";

const LevelManager = ({levelData}) => {
    const [currentLevels, setCurrentLevels] = useState([levelData.levels[0]]);
    const [history, setHistory] = useState([]);
    const handleLevels = new HandleLevels(history, levelData, currentLevels)


    useEffect(() => {
        setCurrentLevels(handleLevels.updateLevelFromHistory());
    }, [history]);


    const nextLevel = (level, item) => {
        setHistory(handleLevels.updateHistory(level, item));
    };

    const previousLevel = () => {
        setCurrentLevels(handleLevels.getPreviousLevel().level);
        setHistory(handleLevels.getPreviousLevel().history);
    };


    const isToShow = (index, item) => {
        return true;
    }

    return (
        <div className="level-manager">
            {currentLevels.map((level, levelIndex) => (
                <React.Fragment key={levelIndex}>
                    <h1>{level.name}</h1>
                    <LevelControlButtonContainer>
                        {level.items.map((item, index) => (
                            isToShow(index, item) ? (
                                <LevelControlButton
                                    key={index}
                                    onClick={() => nextLevel(level, item)}
                                    bootstrapIcon={item.icon}
                                    label={item.name}
                                />
                            ) : <></>
                        ))}
                    </LevelControlButtonContainer>
                </React.Fragment>
            ))}
            <Button onClick={previousLevel}>Previous</Button>
        </div>
    );
};

export default LevelManager;
