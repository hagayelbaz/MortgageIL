import Help from "../../Help/Help";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


const CurrentBorrowerOption = ({setEditMode, onSave}) => {
    return (
        <>
            <Help text='שמור שינויים'>
                <SaveIcon role="button"
                          onClick={onSave}
                          className="fs-3 mx-2"/>
            </Help>
            <Help text='חזרה לרשימת לווים'>
                <ArrowBackIosIcon role="button" className="fs-3 mx-2"
                                  onClick={() => setEditMode(false)}/>
            </Help>
        </>
    )
}

export default CurrentBorrowerOption;