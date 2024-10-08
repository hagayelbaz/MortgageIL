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
const table2 = [
    {
        fullName: 'חגי כהן',
        id: '22563365',
        phone: '050-1234567'
    },
    {
        fullName: 'נעמי לוי',
        id: '22563366',
        phone: '050-2345678'
    },
    {
        fullName: 'אביב כהן',
        id: '22563367',
        phone: '050-3456789'
    },
    {
        fullName: 'רונן כהן',
        id: '22563368',
        phone: '050-4567890'
    },
    {
        fullName: 'יפתח כהן',
        id: '22563369',
        phone: '050-5678901'
    },
    {
        fullName: 'אהרון כהן',
        id: '22563370',
        phone: '050-6789012'
    },
    {
        fullName: 'רחל כהן',
        id: '22563371',
        phone: '050-7890123'
    },
    {
        fullName: 'שירה כהן',
        id: '22563372',
        phone: '050-8901234'
    },
    {
        fullName: 'יעקב כהן',
        id: '22563373',
        phone: '050-9012345'
    },
    {
        fullName: 'אלישע כהן',
        id: '22563374',
        phone: '050-0123456'
    },
    {
        fullName: 'מרים כהן',
        id: '22563375',
        phone: '050-1234567'
    },
    {
        fullName: 'עמיחי כהן',
        id: '22563376',
        phone: '050-2345678'
    },
    {
        fullName: 'דורון כהן',
        id: '22563377',
        phone: '050-3456789'
    },
    {
        fullName: 'מרדכי כהן',
        id: '22563378',
        phone: '050-4567890'
    },
    {
        fullName: 'שמואל כהן',
        id: '22563379',
        phone: '050-5678901'
    },
    {
        fullName: 'דבורה כהן',
        id: '22563380',
        phone: '050-6789012'
    },
    {
        fullName: 'משה כהן',
        id: '22563381',
        phone: '050-7890123'
    },
    {
        fullName: 'חנה כהן',
        id: '22563382',
        phone: '050-8901234'
    },
    {
        fullName: 'דוד כהן',
        id: '22563383',
        phone: '050-9012345'
    },
    {
        fullName: 'תמר כהן',
        id: '22563384',
        phone: '050-0123456'
    },
    {
        fullName: 'אלעד כהן',
        id: '22563385',
        phone: '050-1234567'
    },
    {
        fullName: 'יעל כהן',
        id: '22563386',
        phone: '050-2345678'
    },
    {
        fullName: 'שלמה כהן',
        id: '22563387',
        phone: '050-3456789'
    },
    {
        fullName: 'נועם כהן',
        id: '22563388',
        phone: '050-4567890'
    },
    {
        fullName: 'לאה כהן',
        id: '22563389',
        phone: '050-5678901'
    },
    {
        fullName: 'יאיר כהן',
        id: '22563390',
        phone: '050-6789012'
    },
    {
        fullName: 'ציפורה כהן',
        id: '22563391',
        phone: '050-7890123'
    },
    {
        fullName: 'עדי כהן',
        id: '22563392',
        phone: '050-8901234'
    },
    {
        fullName: 'אברהם כהן',
        id: '22563393',
        phone: '050-9012345'
    },
    {
        fullName: 'רות כהן',
        id: '22563394',
        phone: '050-0123456'
    },
    {
        fullName: 'אילן כהן',
        id: '22563395',
        phone: '050-1234567'
    },
    {
        fullName: 'גיל כהן',
        id: '22563396',
        phone: '050-2345678'
    },
    {
        fullName: 'רבקה כהן',
        id: '22563397',
        phone: '050-3456789'
    },
    {
        fullName: 'מתן כהן',
        id: '22563398',
        phone: '050-4567890'
    },
    {
        fullName: 'רינה כהן',
        id: '22563399',
        phone: '050-5678901'
    },
    {
        fullName: 'יאל כהן',
        id: '22563400',
        phone: '050-6789012'
    },
    {
        fullName: 'אורי כהן',
        id: '22563401',
        phone: '050-7890123'
    },
    {
        fullName: 'רונית כהן',
        id: '22563402',
        phone: '050-8901234'
    },
    {
        fullName: 'בנימין כהן',
        id: '22563403',
        phone: '050-9012345'
    },
    {
        fullName: 'מאיר כהן',
        id: '22563404',
        phone: '050-0123456'
    },
    {
        fullName: 'אביטל כהן',
        id: '22563405',
        phone: '050-1234567'
    },
    {
        fullName: 'אלכסנדר כהן',
        id: '22563406',
        phone: '050-2345678'
    },
    {
        fullName: 'חיים כהן',
        id: '22563407',
        phone: '050-3456789'
    },
    {
        fullName: 'אבישי כהן',
        id: '22563408',
        phone: '050-4567890'
    },
    {
        fullName: 'מיכל כהן',
        id: '22563409',
        phone: '050-5678901'
    },
    {
        fullName: 'רפאל כהן',
        id: '22563410',
        phone: '050-6789012'
    },
    {
        fullName: 'שושנה כהן',
        id: '22563411',
        phone: '050-7890123'
    },
    {
        fullName: 'איתן כהן',
        id: '22563412',
        phone: '050-8901234'
    },
    {
        fullName: 'עידן כהן',
        id: '22563413',
        phone: '050-9012345'
    },
    {
        fullName: 'דליה כהן',
        id: '22563414',
        phone: '050-0123456'
    },
    {
        fullName: 'אורלי כהן',
        id: '22563415',
        phone: '050-1234567'
    },
    {
        fullName: 'עודד כהן',
        id: '22563416',
        phone: '050-2345678'
    },
    {
        fullName: 'מרים כהן',
        id: '22563417',
        phone: '050-3456789'
    },
    {
        fullName: 'איתי כהן',
        id: '22563418',
        phone: '050-4567890'
    },
    {
        fullName: 'אביגיל כהן',
        id: '22563419',
        phone: '050-5678901'
    },
    {
        fullName: 'צחי כהן',
        id: '22563420',
        phone: '050-6789012'
    },
    {
        fullName: 'דינה כהן',
        id: '22563421',
        phone: '050-7890123'
    },
    {
        fullName: 'איליה כהן',
        id: '22563422',
        phone: '050-8901234'
    },
    {
        fullName: 'מרדכי כהן',
        id: '22563423',
        phone: '050-9012345'
    },
    {
        fullName: 'אהובה כהן',
        id: '22563424',
        phone: '050-0123456'
    },
    {
        fullName: 'אריאל כהן',
        id: '22563425',
        phone: '050-1234567'
    },
    {
        fullName: 'ליאור כהן',
        id: '22563426',
        phone: '050-2345678'
    },
    {
        fullName: 'טל כהן',
        id: '22563427',
        phone: '050-3456789'
    },
    {
        fullName: 'אלכס כהן',
        id: '22563428',
        phone: '050-4567890'
    },
    {
        fullName: 'אילנה כהן',
        id: '22563429',
        phone: '050-5678901'
    },
    {
        fullName: 'שמחה כהן',
        id: '22563430',
        phone: '050-6789012'
    },
    {
        fullName: 'עומר כהן',
        id: '22563431',
        phone: '050-7890123'
    },
    {
        fullName: 'אוריאל כהן',
        id: '22563432',
        phone: '050-8901234'
    },
    {
        fullName: 'דב כהן',
        id: '22563433',
        phone: '050-9012345'
    },
    {
        fullName: 'עינת כהן',
        id: '22563434',
        phone: '050-0123456'
    },
    {
        fullName: 'ירון כהן',
        id: '22563435',
        phone: '050-1234567'
    },
    {
        fullName: 'דניאל כהן',
        id: '22563436',
        phone: '050-2345678'
    },
    {
        fullName: 'אבישג כהן',
        id: '22563437',
        phone: '050-3456789'
    },
    {
        fullName: 'חן כהן',
        id: '22563438',
        phone: '050-4567890'
    },
    {
        fullName: 'נועה כהן',
        id: '22563439',
        phone: '050-5678901'
    },
    {
        fullName: 'יובל כהן',
        id: '22563440',
        phone: '050-6789012'
    },
    {
        fullName: 'עידית כהן',
        id: '22563441',
        phone: '050-7890123'
    },
    {
        fullName: 'מנחם כהן',
        id: '22563442',
        phone: '050-8901234'
    },
    {
        fullName: 'אביה כהן',
        id: '22563443',
        phone: '050-9012345'
    },
    {
        fullName: 'רחלי כהן',
        id: '22563444',
        phone: '050-0123456'
    },
    {
        fullName: 'גדעון כהן',
        id: '22563445',
        phone: '050-1234567'
    },
    {
        fullName: 'אלון כהן',
        id: '22563446',
        phone: '050-2345678'
    },
    {
        fullName: 'שרית כהן',
        id: '22563447',
        phone: '050-3456789'
    },
    {
        fullName: 'עידן כהן',
        id: '22563448',
        phone: '050-4567890'
    },
    {
        fullName: 'מיה כהן',
        id: '22563449',
        phone: '050-5678901'
    },
    {
        fullName: 'גלעד כהן',
        id: '22563450',
        phone: '050-6789012'
    },
    {
        fullName: 'מזל כהן',
        id: '22563451',
        phone: '050-7890123'
    },
    {
        fullName: 'אהרום כהן',
        id: '22563452',
        phone: '050-8901234'
    },
    {
        fullName: 'אילת כהן',
        id: '22563453',
        phone: '050-9012345'
    },
    {
        fullName: 'אוריה כהן',
        id: '22563454',
        phone: '050-0123456'
    },
    {
        fullName: 'מיטל כהן',
        id: '22563455',
        phone: '050-1234567'
    },
    {
        fullName: 'רמות כהן',
        id: '22563456',
        phone: '050-2345678'
    },
    {
        fullName: 'בר כהן',
        id: '22563457',
        phone: '050-3456789'
    },
    {
        fullName: 'שרית כהן',
        id: '22563458',
        phone: '050-4567890'
    },
    {
        fullName: 'יובל כהן',
        id: '22563459',
        phone: '050-5678901'
    },
    {
        fullName: 'אורלי כהן',
        id: '22563460',
        phone: '050-6789012'
    }
];
const colData2 = {
    names: ['fullName', 'id', 'phone'],
    display: ['שם מלא', 'תעודת זהות', 'טלפון']

}
//IMPORTANT! for githb copilot change suggestion type alt + [ and alt + ]

const mortgageAccStatus = {
    DTI: {
        value: 0.32,
        color: '#44aa00',
    },
    LTV: {
        value: 0.63,
        color: '#889900',
    },
    accountHealth: {
        value: 0.75,
        color: '#ff0000',
        text: 'חשוד'
    }
}
const data01Chart = [
    {
        "name": "Group A",
        "value": 400
    },
    {
        "name": "Group B",
        "value": 300
    },
    {
        "name": "Group C",
        "value": 300
    },
    {
        "name": "Group D",
        "value": 200
    },
    {
        "name": "Group E",
        "value": 278
    },
    {
        "name": "Group F",
        "value": 189
    }
];
const data02Chart = [
    {
        "name": "Group A",
        "value": 2400
    },
    {
        "name": "Group B",
        "value": 4567
    },
    {
        "name": "Group C",
        "value": 1398
    },
    {
        "name": "Group D",
        "value": 9800
    },
    {
        "name": "Group E",
        "value": 3908
    },
    {
        "name": "Group F",
        "value": 4800
    }
];
const userData = {
    id: 207447152,
    phoneNumber: '050-1234567',
    email: 'hagay@gmail.com',
    firstName: 'חגי',
    lastName: 'כהן',
    status: 'רווק',
    childrenUnder18: 2,
    address: {
        city: 'תל אביב',
        street: 'הרצל',
        number: 12,
        apartment: 3
    },
    incomes: [
        {
            type: 'משכורת',
            employer: 'טבע',
            amount: 10000,
            startDate: '01/01/2022',
        },
        {
            type: 'קצבאות',
            employer: 'פנסיה',
            amount: 5000,
            startDate: '01/01/2022',
        },
        {
            type: 'השקעות',
            employer: 'אג"ח',
            amount: 2000,
            startDate: '01/01/2022',
        }
    ],
}
const mortgageTracks = [
    {
        id: 1,
        type: "קבועה לא צמודה",
        interest: 3.5,
        startDate: "01/01/2022",
        payMethod: "שפיצר",
        amount: 1000000,
        duration: 360,
        CPI: 0,
        firstPayment: 3200,
        sumPayment: 1152000,
    },
    {
        id: 2,
        type: "פריים",
        interest: 6.3,
        startDate: "01/01/2022",
        payMethod: "שפיצר",
        amount: 1000000,
        duration: 240,
        CPI: 0,
        firstPayment: 3200,
        sumPayment: 1152000,
    },
    {
        id: 3,
        type: "משתנה לא צמודה",
        interest: 5.2,
        startDate: "01/01/2022",
        payMethod: "שפיצר",
        amount: 1000000,
        duration: 360,
        CPI: 0,
        firstPayment: 3200,
        sumPayment: 1152000,
    },
    {
        id: 4,
        type: "משתנה צמודה",
        interest: 4.2,
        startDate: "01/01/2022",
        payMethod: "שפיצר",
        amount: 1000000,
        duration: 360,
        CPI: 0,
        firstPayment: 3200,
        sumPayment: 1152000,
    },
    {
        id: 5,
        type: "קבועה לא צמודה",
        interest: 5,
        startDate: "01/01/2022",
        payMethod: "שפיצר",
        amount: 1000000,
        duration: 360,
        CPI: 0,
        firstPayment: 3200,
        sumPayment: 1152000,
    },
    {
        id: 6,
        type: "קבועה צמודה",
        interest: 2.99,
        startDate: "01/01/2022",
        payMethod: "קרן שווה",
        amount: 1000000,
        duration: 360,
        CPI: 0,
        firstPayment: 3200,
        sumPayment: 1152000,
    }
];
const mortgageTracksCols = {
    names: ['type', 'interest', 'startDate', 'payMethod', 'amount', 'duration', 'CPI', 'firstPayment', 'sumPayment'],
    display: ['שם מסלול', 'ריבית', 'תאריך פתיחה', 'שיטת תשלום', 'סכום מקורי', 'משך ההלוואה', 'הצמדה למדד', 'תשלום ראשון', 'תשלום חודשי']
}

export {
    tableData,
    colData,
    testNews,
    chartData,
    table2,
    colData2,
    mortgageAccStatus,
    data01Chart,
    data02Chart,
    userData,
    mortgageTracks,
    mortgageTracksCols
};