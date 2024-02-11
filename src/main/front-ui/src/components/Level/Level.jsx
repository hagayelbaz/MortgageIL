import React, {useEffect, useState} from "react";
import './Level.css';

import levelData from '../../assets/Levels.json';

const Level = ({}) => {
    const [step, setStep] = useState(1);

    useEffect(() => {
        console.log(levelData);
    }, []);

    return (
        <div className="">

        </div>
    );
}

export default Level;