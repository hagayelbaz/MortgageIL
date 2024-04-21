import './PortalBorrowers.css';
import CustomTable from "../../CustomTable/CustomTable";
import {colData, colData2, table2, tableData} from "../../../Classes/TestData";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from '@mui/icons-material/Edit';
import {Row} from "react-bootstrap";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const PortalBorrowers = () => {

    const optionClick = (row) => {
        console.log(row);
    }

    return (
        <div className="container-fluid secondary-bg-dark">
            <Row>
                <div className="d-flex justify-content-between">
                    <h1 className='p-3 pb-0 position-sticky z-2'>
                        לווים בתיק
                    </h1>
                    <div className="d-flex align-items-center">
                        <AddCircleIcon role="button" className="fs-3 mx-2"/>
                        <MoreVertIcon role="button" className="fs-3 mx-2"/>
                    </div>
                </div>
                <hr/>
            </Row>
            <Row>
                <CustomTable data={table2}
                             columns={colData2}
                             spacialIcon={(row) => (
                                 <EditIcon role="button"
                                            className="p-0 mx-1"
                                           onClick={() => optionClick(row)}/>
                             )}
                             tableStyle={{maxHeight: '65dvh'}}/>
            </Row>
        </div>
    )
}

export default PortalBorrowers;