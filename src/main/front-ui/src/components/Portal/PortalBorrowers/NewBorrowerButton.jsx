import AddCircleIcon from "@mui/icons-material/AddCircle";
import Help from "../../Help/Help";


const NewBorrowerButton = ({setShowAdd}) => {
    return (
        <Help text='לחץ ליצירת לווה חדש'>
            <AddCircleIcon role="button"
                           onClick={() => setShowAdd(true)}
                           className="fs-3 mx-2"/>
        </Help>
    )
}

export default NewBorrowerButton;