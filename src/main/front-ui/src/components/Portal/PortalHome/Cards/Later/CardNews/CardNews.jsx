import './CardNews.css'
import LaunchIcon from '@mui/icons-material/Launch';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {useEffect, useState} from "react";


/**
 * <b>CardNews</b> component that displays news data.
 * <b>How it works:</b>
 * 1. The component receives an array of news objects.
 * 2. The component sorts the news array by date.
 * 3. The component displays the news array.
 * 4. The component allows the user to toggle the sort order.
 *
 * <b>Example:</b>
 * ```javascript
 *      const testNews = [
 *          {
 *              title: 'משרד הבריאות משיק תוכנית חדשה למניעת מחלות כרוניות.',
 *              date: '31/12/2022',
 *              content: 'משרד הבריאות משיק תוכנית חדשה למניעת מחלות כרוניות.',
 *              link: 'https://www.google.com'
 *          },
 *          {
 *              title: 'סיכום שנתי: כלכלה ופיננסים',
 *              date: '31/12/2022',
 *              content: 'סיכום שנתי של המגמות העיקריות בשוקים הפיננסיים והכלכליים.',
 *              link: 'https://www.google.com'
 *          }
 *      ];
 *
 *      <CardNews newsArr={testNews}/>
 * ```
 *
 * @param newsArr - array of news objects.
 * @returns {JSX.Element} - CardNews component.
 * @constructor - CardNews
 */

const CardNews = ({newsArr}) => {
    const [newsData, setNewsData] = useState(newsArr ?? []);

    useEffect(() => {
        setNewsData([...newsData].sort((a, b) => new Date(b.date) - new Date(a.date)));
    }, [newsArr]);

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
                        <div key={index} className="p-2 border-2 secondary-border-light rounded-2 m-3">
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