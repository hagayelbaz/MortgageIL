import LevelControlButton from "../../Controls/LevelButton/LevelControlButton/LevelControlButton";
import LevelControlInput from "../../Controls/LevelInput/LevelControlInput/LevelControlInput";
import Mask from "../../../Utils/Mask";
import LevelControlRadioButton from "../../Controls/LevelRadioButton/LevelControlRadioButton/LevelControlRadioButton";
import LevelControlCheckBox from "../../Controls/LevelRadioCheckBox/LevelControlCheckBox/LevelControlCheckBox";


const LevelControl = ({ level, item, levelType, isSelected, nextLevelClicked, selected }) => {
    const data = {
        isSelected: isSelected,
        onClick: nextLevelClicked,
        label: item.name,
        selected: selected,
    }

    if(levelType === "buttons") {
        return <LevelControlButton {...data} />;
    }
    if(levelType === "radioButtons"){
        return <LevelControlRadioButton {...data} name={level.level} />;
    }
    if(levelType === "checkBoxes"){
        return <LevelControlCheckBox {...data} name={level.level} />;
    }
    if(levelType === "inputs") {
        return <LevelControlInput
            mask={Mask.mask.find((mask) => mask.name === item.mask).mask}
            required={true}
            placeholder={item.placeHolder}
            pattern={item.pattern}
            insideLabel={item.icon}
            bootstrapIcon={item.icon}
            {...data}
        />;
    }
}

export default LevelControl;