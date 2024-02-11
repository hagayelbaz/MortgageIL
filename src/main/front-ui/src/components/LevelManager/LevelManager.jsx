import React, {useState} from "react";
import './LevelManager.css';

import levelData from '../../assets/Levels.json';
import LevelSelectButtonContainer from "../LevelSelectButtonContainer/LevelSelectButtonContainer";
import LevelSelectButton from "../LevelSelectButton/LevelSelectButton";
import {Button} from "react-bootstrap";

const LevelManager = ({}) => {
    const [level, setLevel] = useState(levelData.levels[0]);
    const [previousLevelIndex, setPreviousLevelIndex] = useState(1);

    const nextLevel = (selected) => {
        console.log(selected);
        if(selected === 0)
            return;//TODO: End of game
        setLevel(levelData.levels[selected -1]);
        setPreviousLevelIndex(level.level);
    }

    const previousLevel = () => {
        setLevel(levelData.levels[previousLevelIndex -1]);
    }


    return (
        <div className="level-manager">
            <h1>{level.name}</h1>
            <LevelSelectButtonContainer>
                {level.items.map((item, index) => {
                    return (
                        <LevelSelectButton key={index} onClick={() => nextLevel(item.nextLevel)} bootstrapIcon={item.icon} label={item.name}/>
                    );
                })}
            </LevelSelectButtonContainer>
            <Button onClick={previousLevel}>Previous</Button>
        </div>
    );
}

export default LevelManager;