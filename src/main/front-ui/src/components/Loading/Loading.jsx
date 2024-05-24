
import './Loading.css';
import {Spinner} from "react-bootstrap";

const Loading = ({isLoading, children}) => {
    return (
        <div className="position-relative">
            <div className={`${isLoading ? 'loading-children' : ''}`}>
                {children}
            </div>
            {isLoading && (
                <div className="overlay">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
        </div>
    );
}

export default Loading;