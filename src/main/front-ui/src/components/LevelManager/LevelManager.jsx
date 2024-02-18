import React, {useEffect, useState} from "react";
import './LevelManager.css';

import levelData from '../../assets/Levels.json';
import LevelSelectButtonContainer from "../LevelSelectButtonContainer/LevelSelectButtonContainer";
import LevelSelectButton from "../LevelSelectButton/LevelSelectButton";
import {Button} from "react-bootstrap";

const LevelManager = () => {
    const [currentLevels, setCurrentLevels] = useState([levelData.levels[0]]);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        console.log(history);
    }, [history]);

    const nextLevel = (level, item) => {
        if (item.nextLevel === 0) return;

        setHistory(prevHistory => [...prevHistory,
            {
                level : level.level,
                selected : item.id,
                role : item.nextLevelRole,
            }
        ])

        const levelToAdd = levelData.levels[item.nextLevel -1];
        const isToAdd = item.nextLevelRole === "followup" && !currentLevels.some(level => level.level === levelToAdd.level);
        setCurrentLevels(prevLevels => isToAdd ? [...prevLevels, levelToAdd] : [levelToAdd]);
    };

    const previousLevel = () => {
        if (history.length === 0) return;

        const lastIndex = history.map(item => item.role).lastIndexOf('level');
        if (lastIndex === -1) return;

        setCurrentLevels(levelData.levels.filter(level => level.level === history[lastIndex].level));
        setHistory(prevHistory => prevHistory.slice(0, lastIndex));
    };


    const isToShow = (index) => {
        return true;
    }

    return (
        <div className="level-manager">
            {currentLevels.map((level, levelIndex) => (
                <React.Fragment key={levelIndex}>
                    <h1>{level.name}</h1>
                    <LevelSelectButtonContainer>
                        {level.items.map((item, index) => (
                            isToShow(index) ? (
                                <LevelSelectButton
                                    key={index}
                                    onClick={() => nextLevel(level, item)}
                                    bootstrapIcon={item.icon}
                                    label={item.name}
                                />
                            ) : <></>
                        ))}
                    </LevelSelectButtonContainer>
                </React.Fragment>
            ))}
            <Button onClick={previousLevel}>Previous</Button>
        </div>
    );
};

export default LevelManager;
