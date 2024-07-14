const SimpleCard = ({header, value, icon, className, iconColor}) => {

    return (
        <div className={className}>
            <div className="p-2 text-light">
                <div className="d-flex align-items-center">
                    <div className={`icon-square text-light`}
                         style={{backgroundColor: iconColor}}>
                        {icon}
                    </div>
                    <div className="">
                        <p className="small m-0 p-0">{header}</p>
                        <p className="font-600 fs-5 p-0 m-0">{value}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimpleCard;