import './CardNews.css'
import LaunchIcon from '@mui/icons-material/Launch';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {useEffect, useState} from "react";

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

const CardNews = ({newsArr}) => {
    //TODO: change to newsArr
    const [newsData, setNewsData] = useState(testNews);

    useEffect(() => {
        setNewsData([...newsData].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        }));
    }, []);

    const onToggleSort = () => {
        setNewsData([...newsData].reverse());
    }


    return (
        <div className="card-data flex-item-inner rounded-2 secondary-bg d-flex flex-column">
            <div className="sticky-top p-3">
                <div className="d-flex justify-content-between">
                    <h2 className="fs-4 fw-lighter p-0 m-0">
                        חדשות
                    </h2>
                    <SwapVertIcon className="fs-4 text-light" role="button" onClick={onToggleSort}/>
                </div>
                <hr/>
            </div>
            <div className="news-container flex-grow-1 overflow-auto">
                {newsData.map((news, index) => {
                    return (
                        <div key={index} className="p-2 border rounded-2 secondary-border-light m-3">
                            <h5 className="fs-6 p-0 m-0">{news.title}</h5>
                            <p className="small muted-text">{news.date}</p>
                            <p>
                                <span>{news.content} &nbsp;</span>
                                <a href={news.link} target='_blank'>
                                    <LaunchIcon className="fs-6 text-info" style={{transform: 'rotate(270deg)'}}/>
                                </a>
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardNews;