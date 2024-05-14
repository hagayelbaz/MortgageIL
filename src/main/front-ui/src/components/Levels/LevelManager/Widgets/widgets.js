import {WidgetProps} from "@rjsf/core";
import CustomInput from "../../../CustomInput/CustomInput";
import CustomCheckBox from "../../../CustomCheckBox/CustomCheckBox";

const widgets = {
    TextWidget: (props: WidgetProps) => {
        return <CustomInput {...props} />;
    },
    CheckboxWidget: (props: WidgetProps) => {
        return (
            <div className="mt-2">
                <CustomCheckBox {...props} />
            </div>
        );
    }
}

export default widgets;