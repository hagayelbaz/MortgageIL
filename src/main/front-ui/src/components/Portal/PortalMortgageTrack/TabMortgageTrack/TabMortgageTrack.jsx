import './TabMortgageTrack.css';
import CustomTable from "../../../CustomTable/CustomTable";
import {Person} from "@mui/icons-material";
import {mortgageTracksCols} from "../../../../Classes/TestData";
import EditIcon from "@mui/icons-material/Edit";
import Help from "../../../Help/Help";

const TabMortgageTrack = ({mortgageTracks}) => {
    return (
        <div>
            <CustomTable data={mortgageTracks} columns={mortgageTracksCols}
                         tableStyle={{maxHeight: "60dvh"}}
                         spacialIcon={(usr) => (
                             <Help text="עריכת מסלול">
                                 <EditIcon role="button"/>
                             </Help>
                         )}/>
        </div>
    );
}

export default TabMortgageTrack;