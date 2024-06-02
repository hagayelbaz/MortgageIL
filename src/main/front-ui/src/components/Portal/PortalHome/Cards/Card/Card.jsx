import Loading from "../../../../Loading/Loading";


const Card = ({
                  isLoading = undefined,
                  error = undefined,
                  isOK = undefined,
                  header,
                  data,
                  icon,
                  iconColor,
                  children
              }) => {

    return (
        <Loading isLoading={isLoading}>
            <div className="card secondary-bg card-data text-light h-100">
                <div className="card-body pb-0 mb-0">
                    <h5 className="card-title small card-data-header">
                        {header}
                    </h5>
                    <div className={`icon-circle text-light ${iconColor}`}>
                        {icon}
                    </div>
                    <div className="card-text mt-3">
                        <p hidden={error} className="mb-1 pb-0">
                            <span hidden={!isLoading} className="font-200 fs-6">טוען..</span>
                            <span hidden={isLoading} className="font-400 fs-2">
                                {data?.value}
                            </span>
                        </p>
                        {children}
                    </div>
                </div>
                <div>
                    <div className="card-footer mt-0">
                        <p hidden={isLoading || error} className="muted-color small m-0 p-0">
                            {data?.date}
                        </p>
                    </div>
                </div>
            </div>
        </Loading>
    )
}

export default Card;