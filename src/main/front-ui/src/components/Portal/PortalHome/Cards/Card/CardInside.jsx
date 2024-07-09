const CardInside = ({data, isOK = undefined, isLoading = undefined, error = undefined }) => {

    return (
        <>
            <p className="m-0 p-0 mb-1">
                <span hidden={isLoading || error} className="muted-color small">
                    {data?.value}
                </span>
                <span hidden={!error} className="muted-color">טוען..</span>
            </p>

            <p hidden={!error} className="muted-color my-3">
                אירעה שגיאה בטעינת הנתונים
                {error && error.message ? `: ${error.message}` : ""}
            </p>
        </>
    )
}



export default CardInside;