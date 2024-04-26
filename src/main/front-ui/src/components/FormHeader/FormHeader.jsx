


const FormHeader = ({ title, no }) => {
    return (
        <>
            <h5 className="fw-light">
                <span className="muted-text">{no}. &nbsp;</span>
                <span>{title}</span>
            </h5>
            <hr style={{borderTop: 'dotted 2px'}}/>
        </>
    )
}

export default FormHeader;