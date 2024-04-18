import {useEffect, useRef, useState} from "react";
import "./CustomTable.css";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { ReactComponent as ExcelIcon } from '../../assets/svgs/excel.svg';
import { ReactComponent as PdfIcon } from '../../assets/svgs/pdf.svg';



const testData = [
    { name: 'John', age: 25, job: 'Engineer' },
    { name: 'Jane', age: 24, job: 'Designer' },
    { name: 'Jim', age: 30, job: 'Developer' },
    { name: 'Josh', age: 28, job: 'Manager' },
    { name: 'Jill', age: 27, job: 'Analyst' },
    { name: 'Jack', age: 26, job: 'Tester' },
    { name: 'Jenny', age: 29, job: 'Architect' },
    { name: 'Joe', age: 31, job: 'Consultant' },
    { name: 'Jen', age: 32, job: 'Sales' },
    { name: 'Jerry', age: 33, job: 'Marketing' },
    { name: 'Jared', age: 34, job: 'HR' },
    { name: 'Jesse', age: 35, job: 'Finance' },
    { name: 'Jude', age: 36, job: 'Admin' },
    { name: 'Julie', age: 37, job: 'Support' },
    { name: 'Jasper', age: 38, job: 'Security' },
    { name: 'Jill', age: 39, job: 'Legal' },
    { name: 'Jenny', age: 40, job: 'Operations' },
    { name: 'Joe', age: 41, job: 'Supply Chain' },
    { name: 'Jen', age: 42, job: 'Logistics' },
    { name: 'Jerry', age: 43, job: 'Procurement' },
    { name: 'Jared', age: 44, job: 'Quality' },
    { name: 'Jesse', age: 45, job: 'Safety' },
    { name: 'Jude', age: 46, job: 'Compliance' },
    { name: 'Julie', age: 47, job: 'Regulatory' },
    { name: 'Jasper', age: 48, job: 'Risk' },
    { name: 'Jill', age: 49, job: 'Audit' },
    { name: 'Jenny', age: 50, job: 'Legal' },
    { name: 'Joe', age: 51, job: 'Operations' },
    { name: 'Jen', age: 52, job: 'Supply Chain' },
    { name: 'Jerry', age: 53, job: 'Logistics' },
    { name: 'Jared', age: 54, job: 'Procurement' },
    { name: 'Jesse', age: 55, job: 'Quality' },
    { name: 'Jude', age: 56, job: 'Safety' },
    { name: 'Julie', age: 57, job: 'Compliance' },
    { name: 'Jasper', age: 58, job: 'Regulatory' },
    { name: 'Jill', age: 59, job: 'Risk' },
    { name: 'Jenny', age: 60, job: 'Audit' }];
const testDataHe = [
    { name: 'חגי', age: 25, job: 'מפתח תוכנה' },
    { name: 'אביגיל', age: 30, job: 'מהנדס תוכנה' },
    { name: 'בועז', age: 28, job: 'אדריכל' },
    { name: 'גל', age: 32, job: 'רופא' },
    { name: 'דוד', age: 29, job: 'מורה' },
    { name: 'הדס', age: 24, job: 'פסיכולוג' },
    { name: 'ויקי', age: 34, job: 'מנתח מערכות' },
    { name: 'זהבה', age: 40, job: 'פילוסוף' },
    { name: 'חנה', age: 31, job: 'מהנדס אזרחי' },
    { name: 'טל', age: 27, job: 'מתמטיקאי' },
    { name: 'יואב', age: 35, job: 'חשבון' },
    { name: 'כפיר', age: 36, job: 'ביולוג' },
    { name: 'ליאור', age: 45, job: 'שף' },
    { name: 'מרדכי', age: 50, job: 'גנן' },
    { name: 'נעמי', age: 26, job: 'מנתחת נתונים' },
    { name: 'סיגל', age: 47, job: 'מהנדס מכונות' },
    { name: 'עומר', age: 29, job: 'מהנדס חשמל' },
    { name: 'פז', age: 33, job: 'מנהל פרויקטים' },
    { name: 'צבי', age: 38, job: 'מעצב גרפי' },
    { name: 'קרן', age: 41, job: 'מהנדס תעשייה וניהול' },
    { name: 'רון', age: 44, job: 'איש שיווק' },
    { name: 'שרה', age: 42, job: 'יועצת לקוחות' },
    { name: 'תמר', age: 37, job: 'עורכת דין' },
    { name: 'יעל', age: 39, job: 'רואת חשבון' },
    { name: 'רחל', age: 46, job: 'מנכ"ל' },
    { name: 'ליאת', age: 48, job: 'עובדת סוציאלית' },
    { name: 'איתן', age: 49, job: 'מורה להיסטוריה' },
    { name: 'אורי', age: 53, job: 'מדריך טיולים' },
    { name: 'אילן', age: 54, job: 'סוכן ביטוח' },
    { name: 'בר', age: 56, job: 'מנהל משאבי אנוש' },
    { name: 'גיא', age: 57, job: 'מפיק אירועים' },
    { name: 'אביטל', age: 25, job: 'מתכנת' },
    { name: 'דניאל', age: 26, job: 'אנליסט נתונים' },
    { name: 'יונתן', age: 27, job: 'מפתח מובייל' },
    { name: 'שלומית', age: 28, job: 'מעצבת אופנה' },
    { name: 'אושר', age: 29, job: 'מורה למתמטיקה' },
    { name: 'נטלי', age: 30, job: 'פסיכיאטרית' },
    { name: 'עידו', age: 31, job: 'איש תקשורת' },
    { name: 'מיכל', age: 32, job: 'פיזיותרפיסטית' },
    { name: 'עמית', age: 33, job: 'אדריכל' },
    { name: 'ענבל', age: 34, job: 'עורכת דין' },
    { name: 'שחר', age: 35, job: 'בעלים של חברת סטארטאפ' },
    { name: 'ירדן', age: 36, job: 'מורה לאנגלית' },
    { name: 'ארז', age: 37, job: 'מנתח מערכות' },
    { name: 'מירב', age: 38, job: 'מנהלת שיווק' },
    { name: 'תום', age: 39, job: 'מהנדס אזרחי' },
    { name: 'סמדר', age: 40, job: 'מנהלת חשבונות' }
];

const columnsTest = ['name', 'age', 'job'];
const columnsTestHe = ['שם', 'גיל', 'עבודה'];



const CustomTable = ({ columns, data, displayCol }) => {
    const [dataToDisplay, setDataToDisplay] = useState(testDataHe);
    const [columnsToDisplay, setColumnsToDisplay] = useState(columnsTest);
    const [displayColumns, setDisplayColumns] = useState(columnsTestHe);


    return (
        <div className="card-data secondary-bg rounded-2">
            <div className="d-flex justify-content-between align-items-center p-3 pb-1">
                <div className="search-container">
                    <input className="search-box p-1" placeholder="חיפוש..." style={{width: '300px'}}/>
                    <SearchIcon className="search-icon"/>
                </div>
                <div>
                    <ExcelIcon className="fs-3 mx-2" role='button'/>
                    <PdfIcon className="fs-3 mx-2" role='button'/>
                    <FilterListIcon className='fs-3' role="button"/>
                </div>
            </div>
            <hr/>
            <div className="custom-table-container overflow-y-auto m-3">
                <table className="secondary-bg custom-table">
                    <thead>
                    <tr>
                        {displayColumns?.map((column, index) => (
                            <th key={index}>
                                    <div className="d-flex justify-content-between p-2">
                                        <h6>{column}</h6>
                                        <SwapVertIcon role="button"/>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {dataToDisplay?.map((row, index) => (
                        <tr key={index}>
                            {columnsTest?.map((column, index) => (
                                <td key={index}>{row[column]}</td>
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
