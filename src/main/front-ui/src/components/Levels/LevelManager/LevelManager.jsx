import React, {Fragment, useEffect, useState} from "react";
import './LevelManager.css';
import LevelControlButtonContainer
    from "../Controls/LevelButton/LevelControlButtonContainer/LevelControlButtonContainer";
import LevelControlButton from "../Controls/LevelButton/LevelControlButton/LevelControlButton";
import HandleLevels from "./handleLevels";
import {Button} from "react-bootstrap";
import {AiFillQuestionCircle} from "react-icons/ai";
import LevelControlInput from "../Controls/LevelInput/LevelControlInput/LevelControlInput";
import {ConditionalWrapper, MultiConditionalWrapper} from "../../Utils/ConditionalWrapper";
import LevelControlInputContainer from "../Controls/LevelInput/LevelControlInputContainer/LevelControlInputContainer";
import Mask from "../../Utils/Mask";


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

    const getItem = (index, item, level) => {
        if (!isToShow(index, item))
            return null;
        switch (item.type) {
            case "input":
                return <LevelControlInput key={index}
                                          mask={Mask.mask.find(mask =>  mask.name === item.mask).mask}
                                          required={true}
                                          placeholder={item.placeHolder}
                                          pattern={item.pattern}
                                          insideLabel={item.icon}
                                          onClick={() => nextLevel(level, item)}
                                          bootstrapIcon={item.icon} label={item.name}/>;
            case "button":
                return <LevelControlButton key={index}
                                           onClick={() => nextLevel(level, item)}
                                           bootstrapIcon={item.icon} label={item.name}/>;
            default:
                return null;
        }
    }


    return (
        <div className="position-relative primary-bg p-3 rounded-2">
            {currentLevels.map((level, levelIndex) => (
                <Fragment key={levelIndex}>
                    <h1 className="text-center py-2 fw-bold">{level.name}</h1>
                    <AiFillQuestionCircle role="button" className="position-absolute secondary-color fs-1 top-0 mt-3"/>
                    <div className="">
                        <MultiConditionalWrapper
                            conditions={[level.levelOrder === 'buttons', level.levelOrder === 'inputs']}
                            wrappers={[<LevelControlButtonContainer/>, <LevelControlInputContainer/> ]}>
                            {level.items.map((item, index) => getItem(index, item, level))}
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
