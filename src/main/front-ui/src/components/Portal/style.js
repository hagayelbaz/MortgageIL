import {menuClasses, sidebarClasses} from "react-pro-sidebar";
import {Vars} from "../../Vars";
import Color from "../../Classes/Color";

export const menuStyle = {
    [`.${sidebarClasses.container}`]: {
        backgroundColor: Vars.PRIMARY_COLOR,
        color: Vars.TEXT_COLOR,
    },
    [`.${menuClasses.button}`]: {
        '&:hover': {
            backgroundColor: Vars.SECONDARY_COLOR,
        },
        '&:active': {
            backgroundColor: Color.darkenColor(Vars.SECONDARY_COLOR, 20),
        },
    },
    [`.${menuClasses.subMenuContent}`]: {
        backgroundColor: Vars.PRIMARY_COLOR_LIGHT,
    },
    [`.${menuClasses.icon}`]: {
        color: Vars.SECONDARY_COLOR_DARK,
    }
}