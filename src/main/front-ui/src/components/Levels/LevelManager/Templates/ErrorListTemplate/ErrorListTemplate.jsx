import {ErrorListProps} from "@rjsf/utils";


const ErrorListTemplate = (props: ErrorListProps) => {
    const { errors, id } = props;
    return (
        <details id={id}>
            <summary className="danger-color">
                שים לב!
                <span className="badge me-2 danger-bg rounded-pill" style={{fontSize: '.6rem'}}>
                    {errors.length}
                </span>
            </summary>

            <ul>
                {errors.map((error, i) => {
                    return (
                        <li key={i} className='list-unstyled danger-color'>
                            {error.message}
                        </li>
                    );
                })}
            </ul>
        </details>
    );
}

export default ErrorListTemplate;