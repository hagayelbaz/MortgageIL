import LevelControlButtonContainer
    from "./Controls/LevelButton/LevelControlButtonContainer/LevelControlButtonContainer";
import LevelControlInputContainer from "./Controls/LevelInput/LevelControlInputContainer/LevelControlInputContainer";
import SimpleControlContainer from "./Controls/SimpleControlContainer";
import React from "react";

const wrapperVars = (level) => {
    level.levelOrder = level.levelOrder ?? 'buttons';

    return {
        conditions: [
            level.levelOrder === 'buttons',
            level.levelOrder === 'inputs',
            level.levelOrder === 'radioButtons',
            level.levelOrder === 'checkBoxes'
        ],
        wrappers: [
            <LevelControlButtonContainer/>,
            <LevelControlInputContainer/>,
            <SimpleControlContainer/>,
            <SimpleControlContainer/>
        ]
    }
}

export default wrapperVars;