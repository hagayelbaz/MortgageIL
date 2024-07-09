
//TODO: add more error messages
//TODO: add the field title to the error message
const transformErrors = (errors, uiSchema) => {
    return errors.map((error) => {
        if (error.name === 'required') {
            error.message = `שים לב למלא את כל שדות החובה`;
        }
        return error;
    });
}

export default transformErrors;