import {withTheme} from '@rjsf/core';
import './CustomiseWidgets.css';
import widgets from "../Widgets/widgets";
import uiSchema from "../uiSchema/uiSchema";
import templates from "../Templates/templates";


const theme = {
    widgets,
    uiSchema,
    templates
};

const CustomForm = withTheme(theme);

export default CustomForm;