import {WidgetProps} from "@rjsf/core";
import CustomInput from "../../../CustomInput/CustomInput";
import {useId} from "react";

const widgets = {
    TextWidget: (props: WidgetProps) => {
        return <CustomInput id={props.id}
                            label={props.label}
                            placeholder={props.label}
                            value={props.value}
                            onChange={(e) => props.onChange(e.target.value)}
        />;
    },
    CheckboxWidget: (props: WidgetProps) => {
        const uniqueId = useId();
        return (
            <div className="mt-2">
                <CustomInput type="checkbox"
                             label={props.label}
                             placeholder={props.label}
                             id={uniqueId}
                             checked={props.checked}
                             onChange={(e) => props.onChange(e.target.checked)}
                />
            </div>
        );
    }
}

export default widgets;