import LevelButton from "../../Controls/LevelButton/LevelButton";

const uiSchema = {
    loanPurpose: {
        "ui:widget": LevelButton
    },
    additionalPropertiesCount: {
        "ui:widget": LevelButton
    },
    isToSell: {
        "ui:widget": LevelButton
    },
    borrowers: {
        'ui:options': {
            addable: true,
            orderable: false,
            removable: true,
        },
        items: {
            firstName: {"ui:classNames": " m-0 p-0"},
            lastName: {"ui:classNames": " m-0 p-0"},
            employer: {"ui:classNames": " m-0 p-0"},
            salary: {"ui:classNames": " m-0 p-0"},
        }
    },
};

//TODO: find a way to show 2 in one line (for array items)

export default uiSchema;