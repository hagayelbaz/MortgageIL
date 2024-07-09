import {FieldErrorProps} from "@rjsf/utils";

const FieldErrorTemplate = (props: FieldErrorProps) => {
    const { errors, id } = props;
    return (
        <>
            {errors?.map((error, i) => {
                return (
                    <div key={i} className='error'>
                        {error}
                    </div>
                );
            })}
        </>
    );
};

export default FieldErrorTemplate;