import React, {useEffect, useState} from "react";
import './LevelManager.css';
import {Button} from "react-bootstrap";
import {MultiConditionalWrapper} from "../../Utils/ConditionalWrapper";
import LevelControl from "./LevelControl/LevelControl";
import wrapperVars from "../Wrappers";

//TODO: handle when i'm go back and change the selection: delete all after
//TODO: handle next level where there is no select option

const LevelManager = ({levelData}) => {
    const [levelToShow, setLevelToShow] = useState(0);
    const [history, setHistory] = useState([{
        selected: -1,
        role: "level",
        level: levelData.levels[0],
    }]);


    //<editor-fold desc="Handle next level">
    const handleNextLevel = (item) => {
        if (!item && levelToShow !== history.length - 1) {
            setLevelToShow(levelToShow + 1);
            return;
        }
        const newHistory = [...history];

        //if user change the selection, delete all after
        if (item && levelToShow !== history.length - 1) {
            newHistory.splice(levelToShow + 1, history.length - levelToShow);
        }
        //change the selection for the last item in the history
        if (item) {
            newHistory[newHistory.length - 1].selected = item.id;
        }

        setHistory([...newHistory, getNewItem(item)]);
        setLevelToShow(levelToShow + 1);
    }

    const getNewItem = (item) => {
        const firstItem = history[levelToShow].level.items[0];
        const nextLevelIndex = item ? item?.nextLevel : firstItem.nextLevel;
        const nextLevelRole = item ? item?.nextLevelRole : firstItem.nextLevelRole;
        const nextLevel = levelData.levels.find((l) => l.level === nextLevelIndex);
        return {selected: -1, role: nextLevelRole, level: nextLevel};
    }
    //</editor-fold>

    //<editor-fold desc="Handle previous level">
    const handlePrevClicked = () => {
        const i = history.slice(0, levelToShow).reverse().findIndex(x => x.role === "level");
        setLevelToShow(i === -1 ? 0 : levelToShow -1 -i);
    }
    //</editor-fold>

    const isItemSelected = (item, level) => {
        const levelIndex = history.findIndex((h) => h.level.level === level.level);
        const selected = history[levelIndex].selected;
        return selected === item.id;
    }

    //<editor-fold desc="if to show the level">
    const isLevelToShow = (level) => {
        const firstLevelIndex = history.slice(0, levelToShow +1).reverse().findIndex(x => x.role === "level");
        const startIndex = firstLevelIndex === -1 ? 0 : levelToShow - firstLevelIndex;
        const part = history.slice(startIndex, levelToShow + 1);
        return part.some((h) => h.level.level === level.level);
    }
    //</editor-fold>


    return (
        <form className="position-relative secondary-bg text-light p-3 rounded-2">
            {history.map((h, index) => {
                const {conditions, wrappers} = wrapperVars(h.level);
                return (
                    <div key={index} className={(isLevelToShow(h.level) ? "d-block" : "d-none")}>
                        <h1 className="text-center py-2 fw-bold">
                            {h.level.name}
                        </h1>
                        <MultiConditionalWrapper conditions={conditions} wrappers={wrappers}>
                            {h.level.items.map((item, index) => {
                                return (
                                    <LevelControl
                                        key={index}
                                        level={h.level}
                                        item={item}
                                        levelType={h.level.levelOrder}
                                        isSelected={isItemSelected(item, h.level)}
                                        nextLevelClicked={() => handleNextLevel(item)}
                                        selected={history[levelToShow].selected}
                                    />
                                )
                            })}
                        </MultiConditionalWrapper>
                        {index === levelToShow && (
                            <div className="my-3 mt-5 d-flex justify-content-between px-3">
                                <a role="button"
                                   className={`px-5 ` + (index === 0 ? "d-none" : "")}
                                   onClick={handlePrevClicked}>
                                    הקודם
                                </a>
                                <Button
                                    className={`px-5 secondary-bg`}
                                    onClick={() => handleNextLevel(null)}>
                                    הבא
                                </Button>
                            </div>
                        )}
                    </div>
                )
            })}
        </form>
    );
};

export default LevelManager;