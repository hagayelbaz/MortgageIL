


const FormHeader = ({ title, no , children, className }) => {
    return (
        <div className={className}>
            <h5 className="fw-light d-flex justify-content-between">
                <div>
                    <span className="muted-text">{no}. &nbsp;</span>
                    <span>{title}</span>
                </div>
                {children}
            </h5>
            <hr style={{borderTop: 'dotted 2px'}}/>
        </div>
    )
}

export default FormHeader;