import {menuClasses, sidebarClasses} from "react-pro-sidebar";
import {Vars} from "../../Vars";
import Color from "../../Classes/Color";

export const menuStyle = {
    [`.${sidebarClasses.container}`]: {
        backgroundColor: Vars.SECONDARY_COLOR,
        color: Vars.TEXT_COLOR,
    },
    [`.${menuClasses.button}`]: {
        '&:hover': {
            backgroundColor: `${Vars.SECONDARY_COLOR_LIGHT} !important`,
            borderRadius: '.2rem',
        },
        '&:active': {
            backgroundColor: `${Vars.SECONDARY_COLOR_LIGHT} !important`,
        },
    },
    [`.${menuClasses.subMenuContent}`]: {
        backgroundColor: Vars.SECONDARY_COLOR_DARK,
    },
    [`.${menuClasses.icon}`]: {
        color: Vars.SECONDARY_COLOR_DARK,
    }
}