import {useEffect, useState} from "react";
import "./CustomTable.css";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import {ReactComponent as ExcelIcon} from '../../assets/svgs/excel.svg';
import {ReactComponent as PdfIcon} from '../../assets/svgs/pdf.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
 * @returns {JSX.Element}
 * @constructor
 */


const CustomTable = ({columns, data, onOptionClick}) => {
    const [dataToDisplay, setDataToDisplay] = useState(data);
    const [columnsToDisplay, setColumnsToDisplay] = useState(columns);
    const [sortConfig, setSortConfig] = useState({key: null, direction: 'ascending'});


    //<editor-fold desc="Add col for option">
    useEffect(() => {
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

    const optionClick = (row) => {
        if (onOptionClick) {
            onOptionClick(row);
        }
    }

    const exportToExcel = () => {
        //TODO: Implement export to excel
    }

    const exportToPdf = () => {
        //TODO: Implement export to pdf
    }

    const filterOptions = () => {
        //TODO: Implement filter options
    }


    return (
        <div className="card-data secondary-bg rounded-2">
            <div className="d-flex justify-content-between align-items-center p-3 pb-1">
                <div className="search-container">
                    <input className="search-box p-1" onChange={onSearch} placeholder="חיפוש..."
                           style={{width: '300px'}}/>
                    <SearchIcon className="search-icon"/>
                </div>
                <div>
                    <ExcelIcon className="fs-3 mx-2" role='button' onClick={exportToExcel}/>
                    <PdfIcon className="fs-3 mx-2" role='button' onClick={exportToPdf}/>
                    <FilterListIcon className='fs-3' role="button" onClick={filterOptions}/>
                </div>
            </div>
            <p className="small px-3 pb-0 pt-2 mt-0 muted-text">
                מציג {dataToDisplay?.length} תוצאות מתוך {data.length}
            </p>
            <hr className="p-0 m-0"/>
            <div className="custom-table-container overflow-y-auto">
                <table className="secondary-bg custom-table">
                    <thead>
                    <tr>
                        {columnsToDisplay.display?.map((column, index) => (
                            <th key={index}>
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
                                        <div className="d-flex justify-content-center px-2">
                                            <MoreVertIcon role="button" onClick={() => optionClick(row)}/>
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
        </div>
    );
}

export default CustomTable;
