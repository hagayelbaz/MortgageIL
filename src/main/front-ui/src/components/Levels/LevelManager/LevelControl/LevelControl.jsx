import LevelControlButton from "../../Controls/LevelButton/LevelControlButton/LevelControlButton";
import LevelControlInput from "../../Controls/LevelInput/LevelControlInput/LevelControlInput";
import Mask from "../../../Utils/Mask";


const LevelControl = ({ level, item, levelType, isSelected, nextLevelClicked }) => {
    return (
        <>
            {levelType === "inputs" && (
                <LevelControlInput
                    mask={Mask.mask.find((mask) => mask.name === item.mask).mask}
                    required={true}
                    placeholder={item.placeHolder}
                    pattern={item.pattern}
                    insideLabel={item.icon}
                    onClick={() => nextLevelClicked(level, item)}
                    bootstrapIcon={item.icon}
                    label={item.name}
                />
            )}
            {levelType === "buttons" && (
                <LevelControlButton
                    isSelected={isSelected}
                    onClick={() => nextLevelClicked(level, item)}
                    label={item.name}
                />
            )}
        </>
    );
}

export default LevelControl;