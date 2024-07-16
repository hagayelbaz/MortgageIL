import Help from "../Help/Help";
import {HelpOutline} from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";


const FormHeader = ({title, no, children, className, help}) => {
    return (
        <div className={className}>
            <h5 className="fw-light d-flex justify-content-between">
                <div>
                    <span className="muted-text">{no}. &nbsp;</span>
                    <span>{title}</span>
                </div>
                {help &&
                    <Help text={help} className="mx-1">
                        <HelpOutlineIcon className="muted-color"/>
                    </Help>
                }
                {children}
            </h5>
            <hr style={{borderTop: 'dotted 2px'}}/>
        </div>
    )
}

export default FormHeader;