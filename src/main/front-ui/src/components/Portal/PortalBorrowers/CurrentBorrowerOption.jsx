import Help from "../../Help/Help";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MessageBox from "../../MessageBox/MessageBox";
import {useState} from "react";


const CurrentBorrowerOption = ({setEditMode, onSave, onDelete}) => {
    const [show, setShow] = useState(false);
    const showMessageBox = () => setShow(true);

    return (
        <>
            <MessageBox message="האם אתה בטוח שברצונך למחוק לווה זה?"
                        header="מחיקת לווה"
                        type="warning"
                        show={show}
                        setShow={setShow}
                        option={['ok', 'cancel']}
                        onOk={onDelete}/>
            <Help text="מחיקת לווה">
                <DeleteForeverIcon role="button"
                                   onClick={showMessageBox}
                                   className="fs-3 mx-2 text-danger"/>
            </Help>
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