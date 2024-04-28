import {useEffect, useState} from "react";
import "./CustomTable.css";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SearchIcon from '@mui/icons-material/Search';
import {ReactComponent as ExcelIcon} from '../../assets/svgs/excel.svg';
import {ReactComponent as PdfIcon} from '../../assets/svgs/pdf.svg';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ExcelExport from "../../Classes/ExcelExport";
import Help from "../Help/Help";
/**
 * <b>Data Structure:</b>
 * <p>
 * columns is an object with two arrays: names and display.
 * names array contains the keys of the data object.
 * display array contains the display names of the columns.
 * </p>
 * <p>
 * data is an array of objects, the keys of the objects should match the keys in the columns object.
 * </p>
 * <p>
 *     onOptionClick is a function that will be called when the option button is clicked.
 *     The function will receive the row object as a parameter.
 * </p>
 * <b>Example:</b>
 * ```javascript
 *     const tableData = [
 *          {name: 'ארז', age: 37, job: 'מנתח מערכות'},
 *          {name: 'מירב', age: 38, job: 'מנהלת שיווק'},
 *          {name: 'תום', age: 39, job: 'מהנדס אזרחי'}
 *     ];
 *     const colData = {
 *          names: ['name', 'age', 'job'],
 *          display: ['שם', 'גיל', 'עבודה']
 *     }
 *     <CustomTable columns={colData} data={tableData} onOptionClick={(row) => console.log(row)}/>
 * ```
 * <b> the result will be:</b>
 * <table style="dir:rtl">
 *     <thead>
 *         <tr>
 *             <th>עבודה</th>
 *             <th>גיל</th>
 *             <th>שם</th>
 *         </tr>
 *         <tr>
 *             <td>מנתח מערכות</td>
 *             <td>37</td>
 *             <td>ארז</td>
 *             <td>⠇</td>
 *         </tr>
 *         <tr>
 *             <td>מנהלת שיווק</td>
 *             <td>38</td>
 *             <td>מירב</td>
 *             <td>⠇</td>
 *         </tr>
 *         <tr>
 *             <td>מהנדס אזרחי</td>
 *             <td>39</td>
 *             <td>תום</td>
 *             <td>⠇</td>
 *         </tr>
 *    </thead>
 * </table>
 *
 * @param columns - an object with two arrays: names and display
 * @param data - an array of objects
 * @param onOptionClick - a function that will be called when the option button is clicked
 * @param spacialIcon - a component that will be displayed in the extra column
 * @param tableStyle - an object with css properties
 * @returns {JSX.Element}
 * @constructor
 */

//TODO: Add pagination (?), when rounded borders are added to the table, the table is not displayed correctly

const CustomTable = ({columns, data, spacialIcon, tableStyle  = {maxHeight: '30dvh'}}) => {
    const [dataToDisplay, setDataToDisplay] = useState(data);
    const [columnsToDisplay, setColumnsToDisplay] = useState(columns);
    const [sortConfig, setSortConfig] = useState({key: null, direction: 'ascending'});


    //<editor-fold desc="Add col for option">
    useEffect(() => {
        if (!spacialIcon || columnsToDisplay.names.includes('extra')) {
            return;
        }
        setColumnsToDisplay({
            names: ['extra', ...columnsToDisplay.names],
            display: ['', ...columnsToDisplay.display]
        });
    }, []);
    //</editor-fold>


    //<editor-fold desc="Search implementation">
    const onSearch = (e) => {
        const searchValue = e.target.value;
        const filteredData = data.filter(row => {
            return Object.values(row).some(value => {
                return value.toString().toLowerCase().includes(searchValue.toLowerCase());
            });
        });
        setDataToDisplay(filteredData);
    }
    //</editor-fold>

    //<editor-fold desc="Toggle sort implementation">
    const toggleSortColumn = (column) => {
        const newDirection = sortConfig.key === column && sortConfig.direction === 'ascending'
            ? 'descending'
            : 'ascending';

        const sortedData = [...dataToDisplay].sort((a, b) => {
            if (newDirection === 'ascending') {
                return a[column] > b[column] ? 1 : a[column] < b[column] ? -1 : 0;
            } else {
                return a[column] < b[column] ? 1 : a[column] > b[column] ? -1 : 0;
            }
        });

        setDataToDisplay(sortedData);
        setSortConfig({key: column, direction: newDirection});
    };
    //</editor-fold>

    //<editor-fold desc="Exporting data">
    const mapDataToHeaders = (data, displayHeaders, nameHeaders) => {
        return data.map(item => {
            const newItem = {};
            displayHeaders.forEach((header, index) => {
                const key = nameHeaders[index];
                newItem[header] = item[key];
            });
            return newItem;
        });
    };

    const exportToExcel = () => {
        //delete the extra column
        const tmp = {...columnsToDisplay};
        if(spacialIcon){
            const index = tmp.names.indexOf('extra');
            if (index > -1) {
                tmp.names.splice(index, 1);
                tmp.display.splice(index, 1);
            }
        }

        const transformedData = mapDataToHeaders(dataToDisplay, tmp.display, tmp.names);
        ExcelExport.exportToExcel(transformedData, tmp.display, 'mortgageIL');
    }

    const exportToPdf = () => {
        //TODO: Implement export to pdf
    }

    const filterOptions = () => {
        //TODO: Implement filter options
    }

    //</editor-fold>


    return (
        <>
            <div className="p-3 pb-1 container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-3 d-flex align-items-center position-relative">
                        <input className="search-box p-1 w-100" onChange={onSearch} placeholder="חיפוש..."/>
                        <SearchIcon className="search-icon"/>
                    </div>
                    <div className="d-none d-xl-block col-xl-6"></div>
                    <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-between justify-content-md-end mt-3 mt-xl-0">
                        <Help text="ייצוא לאקסל">
                            <ExcelIcon className="fs-3 mx-2" role='button' onClick={exportToExcel}/>
                        </Help>
                        <Help text="ייצוא ל-PDF">
                            <PdfIcon className="fs-3 mx-2" role='button' onClick={exportToPdf}/>
                        </Help>
                        <Help text="סינון">
                            <FilterAltIcon className='fs-3' role="button" onClick={filterOptions}/>
                        </Help>
                    </div>
                </div>
                <div className="row">
                    <p className="small muted-text">
                        מציג {dataToDisplay?.length} תוצאות מתוך {data.length}
                    </p>
                </div>
            </div>
            <hr className="p-0 m-0"/>
            <div className="container-fluid overflow-x-hidden overflow-y-auto" style={{...tableStyle}}>
                <table className="secondary-bg custom-table">
                    <thead>
                    <tr>
                        {columnsToDisplay.display?.map((column, index) => (
                            <th key={index} className="d-none d-md-table-cell">{/*??*/}
                                <div className="d-flex justify-content-between p-2 align-items-center">
                                    <h6>{column}</h6>
                                    {column && (
                                        <SwapVertIcon role="button"
                                                      onClick={() => toggleSortColumn(columnsToDisplay.names[index])}/>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {dataToDisplay?.length === 0 && (
                        <tr>
                            <td colSpan={columnsToDisplay.names.length} className="text-center py-3 fw-bolder">
                                לא נמצאו תוצאות
                            </td>
                        </tr>
                    )}
                    {dataToDisplay?.map((row, index) => (
                        <tr key={index}>
                            {columnsToDisplay.names?.map((column, columnKey) => (
                                column === 'extra' ? (
                                    <td key={columnKey}>
                                        <div className="d-flex justify-content-center">
                                            {spacialIcon ? spacialIcon(row) : null}
                                        </div>
                                    </td>
                                ) : (
                                    <td key={columnKey}>{row[column]}</td>
                                )
                            ))}
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CustomTable;
