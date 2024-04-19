import React from "react";
import {Col, Row} from "react-bootstrap";
import DataCard from "../../DataCard/DataCard";
import CardCPI from "./Cards/CardCPI/CardCPI";
import CardNews from "./Cards/CardNews/CardNews";
import "./PortalHome.css";
import CustomTable from "../../CustomTable/CustomTable";

const tableData = [
    {name: 'חגי', age: 25, job: 'מפתח תוכנה'},
    {name: 'אביגיל', age: 30, job: 'מהנדס תוכנה'},
    {name: 'בועז', age: 28, job: 'אדריכל'},
    {name: 'גל', age: 32, job: 'רופא'},
    {name: 'דוד', age: 29, job: 'מורה'},
    {name: 'הדס', age: 24, job: 'פסיכולוג'},
    {name: 'ויקי', age: 34, job: 'מנתח מערכות'},
    {name: 'זהבה', age: 40, job: 'פילוסוף'},
    {name: 'חנה', age: 31, job: 'מהנדס אזרחי'},
    {name: 'טל', age: 27, job: 'מתמטיקאי'},
    {name: 'יואב', age: 35, job: 'חשבון'},
    {name: 'כפיר', age: 36, job: 'ביולוג'},
    {name: 'ליאור', age: 45, job: 'שף'},
    {name: 'מרדכי', age: 50, job: 'גנן'},
    {name: 'נעמי', age: 26, job: 'מנתחת נתונים'},
    {name: 'סיגל', age: 47, job: 'מהנדס מכונות'},
    {name: 'עומר', age: 29, job: 'מהנדס חשמל'},
    {name: 'פז', age: 33, job: 'מנהל פרויקטים'},
    {name: 'צבי', age: 38, job: 'מעצב גרפי'},
    {name: 'קרן', age: 41, job: 'מהנדס תעשייה וניהול'},
    {name: 'רון', age: 44, job: 'איש שיווק'},
    {name: 'שרה', age: 42, job: 'יועצת לקוחות'},
    {name: 'תמר', age: 37, job: 'עורכת דין'},
    {name: 'יעל', age: 39, job: 'רואת חשבון'},
    {name: 'רחל', age: 46, job: 'מנכ"ל'},
    {name: 'ליאת', age: 48, job: 'עובדת סוציאלית'},
    {name: 'איתן', age: 49, job: 'מורה להיסטוריה'},
    {name: 'אורי', age: 53, job: 'מדריך טיולים'},
    {name: 'אילן', age: 54, job: 'סוכן ביטוח'},
    {name: 'בר', age: 56, job: 'מנהל משאבי אנוש'},
    {name: 'גיא', age: 57, job: 'מפיק אירועים'},
    {name: 'אביטל', age: 25, job: 'מתכנת'},
    {name: 'דניאל', age: 26, job: 'אנליסט נתונים'},
    {name: 'יונתן', age: 27, job: 'מפתח מובייל'},
    {name: 'שלומית', age: 28, job: 'מעצבת אופנה'},
    {name: 'אושר', age: 29, job: 'מורה למתמטיקה'},
    {name: 'נטלי', age: 30, job: 'פסיכיאטרית'},
    {name: 'עידו', age: 31, job: 'איש תקשורת'},
    {name: 'מיכל', age: 32, job: 'פיזיותרפיסטית'},
    {name: 'עמית', age: 33, job: 'אדריכל'},
    {name: 'ענבל', age: 34, job: 'עורכת דין'},
    {name: 'שחר', age: 35, job: 'בעלים של חברת סטארטאפ'},
    {name: 'ירדן', age: 36, job: 'מורה לאנגלית'},
    {name: 'ארז', age: 37, job: 'מנתח מערכות'},
    {name: 'מירב', age: 38, job: 'מנהלת שיווק'},
    {name: 'תום', age: 39, job: 'מהנדס אזרחי'},
    {name: 'סמדר', age: 40, job: 'מנהלת חשבונות'}
];
const colData = {
    names: ['name', 'age', 'job'],
    display: ['שם', 'גיל', 'עבודה']
}
const testNews = [
    {
        title: 'הודעה לתקשורת בנוגע לשער חליפין',
        date: '12/12/2021',
        content: 'שער החליפין עומד על 3.5% במהלך החודש האחרון, נא לקחת בחשבון בתכנון הכלכלי שלכם',
        link: 'https://www.google.com'
    },
    {
        title: 'עדכון חשוב בנוגע לשער הדולר',
        date: '01/03/2022',
        content: 'לא יהיה שינוי החודש, לתשומת ליבכם כי במהלך החודש לא יתקבלו פניות',
        link: 'https://www.google.com'
    },
    {
        title: 'חידושים בתחום הנדל"ן',
        date: '15/04/2022',
        content: 'נכנסים לתוקף חוקים חדשים המשפיעים על רכישת נכסים למגורים, יש לעקוב אחר ההתפתחויות.',
        link: 'https://www.google.com'
    },
    {
        title: 'פרץ מחדש: עלייה במחירי הפלטינה',
        date: '22/05/2022',
        content: 'מחירי הפלטינה עלו ב-7% בשוק העולמי, השפעות אפשריות על יצרני תכשיטים.',
        link: 'https://www.google.com'
    },
    {
        title: 'בנק ישראל מציג: סקירה כלכלית',
        date: '30/06/2022',
        content: 'הבנק המרכזי יצא בדו"ח החדש על מגמות בשוק ההון, עליות צפויות בריבית.',
        link: 'https://www.google.com'
    },
    {
        title: 'השפעות הברקזיט על הכלכלה המקומית',
        date: '12/07/2022',
        content: 'מומחים נותנים את דעתם על ההשפעות הכלכליות של יציאת בריטניה מהאיחוד האירופי.',
        link: 'https://www.google.com'
    },
    {
        title: 'כנס עולמי לחדשנות בתעשייה',
        date: '28/08/2022',
        content: 'כנס חדשנות גלובלי יתקיים בתל אביב, עם מיקוד בתעשיות הטכנולוגיה.',
        link: 'https://www.google.com'
    },
    {
        title: 'שינויים במדיניות המס המקומית',
        date: '15/09/2022',
        content: 'עיריית תל אביב מודיעה על שינוי בשיעורי המס לעסקים קטנים.',
        link: 'https://www.google.com'
    },
    {
        title: 'מגמות חדשות בשוק האנרגיה',
        date: '20/10/2022',
        content: 'שינויים במחירי האנרגיה עשויים להוביל לחידושים בשוק המקומי.',
        link: 'https://www.google.com'
    },
    {
        title: 'התפתחויות בבריאות הציבור',
        date: '01/11/2022',
        content: 'משרד הבריאות משיק תוכנית חדשה למניעת מחלות כרוניות.',
        link: 'https://www.google.com'
    },
    {
        title: 'סיכום שנתי: כלכלה ופיננסים',
        date: '31/12/2022',
        content: 'סיכום שנתי של המגמות העיקריות בשוקים הפיננסיים והכלכליים.',
        link: 'https://www.google.com'
    }
]
const chartData = [
    {
        "date": "1998-01-31T22:00:00.000Z",
        "value": 101.47
    },
    {
        "date": "1998-02-28T22:00:00.000Z",
        "value": 100.78
    },
    {
        "date": "1998-03-31T21:00:00.000Z",
        "value": 101.13
    },
    {
        "date": "1998-04-30T21:00:00.000Z",
        "value": 101.91
    },
    {
        "date": "1998-05-31T21:00:00.000Z",
        "value": 100.65
    },
    {
        "date": "1998-06-30T21:00:00.000Z",
        "value": 104.97
    },
    {
        "date": "1998-07-31T21:00:00.000Z",
        "value": 100.81
    },
    {
        "date": "1998-08-31T21:00:00.000Z",
        "value": 102.24
    },
    {
        "date": "1998-09-30T22:00:00.000Z",
        "value": 103.62
    },
    {
        "date": "1998-10-31T22:00:00.000Z",
        "value": 100.39
    },
    {
        "date": "1998-11-30T22:00:00.000Z",
        "value": 98.83
    },
    {
        "date": "1998-12-31T22:00:00.000Z",
        "value": 99.53
    },
    {
        "date": "1999-01-31T22:00:00.000Z",
        "value": 104.14
    },
    {
        "date": "1999-02-28T22:00:00.000Z",
        "value": 100.8
    },
    {
        "date": "1999-03-31T22:00:00.000Z",
        "value": 98.33
    },
    {
        "date": "1999-04-30T21:00:00.000Z",
        "value": 100.02
    },
    {
        "date": "1999-05-31T21:00:00.000Z",
        "value": 103.54
    },
    {
        "date": "1999-06-30T21:00:00.000Z",
        "value": 100.96
    },
    {
        "date": "1999-07-31T21:00:00.000Z",
        "value": 99.63
    },
    {
        "date": "1999-08-31T21:00:00.000Z",
        "value": 101.42
    },
    {
        "date": "1999-09-30T22:00:00.000Z",
        "value": 104.88
    },
    {
        "date": "1999-10-31T22:00:00.000Z",
        "value": 103.01
    },
    {
        "date": "1999-11-30T22:00:00.000Z",
        "value": 101.99
    },
    {
        "date": "1999-12-31T22:00:00.000Z",
        "value": 102.11
    },
    {
        "date": "2000-01-31T22:00:00.000Z",
        "value": 98.73
    },
    {
        "date": "2000-02-29T22:00:00.000Z",
        "value": 101.52
    },
    {
        "date": "2000-03-31T22:00:00.000Z",
        "value": 100.57
    },
    {
        "date": "2000-04-30T21:00:00.000Z",
        "value": 101.19
    },
    {
        "date": "2000-05-31T21:00:00.000Z",
        "value": 101.14
    },
    {
        "date": "2000-06-30T21:00:00.000Z",
        "value": 100.1
    },
    {
        "date": "2000-07-31T21:00:00.000Z",
        "value": 104.65
    },
    {
        "date": "2000-08-31T21:00:00.000Z",
        "value": 101.5
    },
    {
        "date": "2000-09-30T21:00:00.000Z",
        "value": 102.1
    },
    {
        "date": "2000-10-31T22:00:00.000Z",
        "value": 101.67
    },
    {
        "date": "2000-11-30T22:00:00.000Z",
        "value": 104.52
    },
    {
        "date": "2000-12-31T22:00:00.000Z",
        "value": 103.13
    },
    {
        "date": "2001-01-31T22:00:00.000Z",
        "value": 101
    },
    {
        "date": "2001-02-28T22:00:00.000Z",
        "value": 99.76
    },
    {
        "date": "2001-03-31T22:00:00.000Z",
        "value": 103.04
    },
    {
        "date": "2001-04-30T21:00:00.000Z",
        "value": 104.26
    },
    {
        "date": "2001-05-31T21:00:00.000Z",
        "value": 101.04
    },
    {
        "date": "2001-06-30T21:00:00.000Z",
        "value": 101.6
    },
    {
        "date": "2001-07-31T21:00:00.000Z",
        "value": 98.79
    },
    {
        "date": "2001-08-31T21:00:00.000Z",
        "value": 103.16
    },
    {
        "date": "2001-09-30T22:00:00.000Z",
        "value": 99.3
    },
    {
        "date": "2001-10-31T22:00:00.000Z",
        "value": 104.37
    },
    {
        "date": "2001-11-30T22:00:00.000Z",
        "value": 99.62
    },
    {
        "date": "2001-12-31T22:00:00.000Z",
        "value": 102.86
    },
    {
        "date": "2002-01-31T22:00:00.000Z",
        "value": 103.8
    },
    {
        "date": "2002-02-28T22:00:00.000Z",
        "value": 102.51
    },
    {
        "date": "2002-03-31T21:00:00.000Z",
        "value": 104.75
    }
];


const PortalHome = () => {
    const getDate = () => {
        const date = new Date();
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    return (
        <div className="container-fluid overflow-x-hidden p-2 secondary-bg-dark text-light">
            <Row>
                <div className="d-flex justify-content-between px-2">
                    <p className="fs-5">צהריים טובים חגי</p>
                    <p className="fs-5">
                        {getDate()}
                    </p>
                </div>
                <hr className="p-0 m-0"/>
            </Row>

            <Row className="mt-2 p-3 flex-container">
                <Col className="col-6">
                    <div className="h-100 flex-item">
                        <CardCPI data={chartData}/>
                    </div>
                </Col>
                <Col className="col-6">
                    <div className="h-100 flex-item">
                        <CardNews newsArr={testNews}/>
                    </div>
                </Col>
            </Row>

            <Row className="p-3">
                <Col>
                    <CustomTable data={tableData} columns={colData}/>
                </Col>
            </Row>


            <Row className="mt-4 p-3">
                <Col>
                    <DataCard header={"הכנסות (שנה אחרונה)"}/>
                </Col>
                <Col>
                    <DataCard header={"הוצאות (ממש השניה)"}/>
                </Col>
            </Row>
        </div>
    );
}

export default PortalHome;