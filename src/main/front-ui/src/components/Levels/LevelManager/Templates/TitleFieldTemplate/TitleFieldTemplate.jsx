import {TitleFieldProps} from "@rjsf/utils";

const TitleFieldTemplate = (props: TitleFieldProps) => {
    const { id, required, title } = props;
    return (
        <header id={id} className="container-fluid text-center fs-5">
            {title}
            {required && <mark className="danger-color">*</mark>}
        </header>
    );
};

export default TitleFieldTemplate;