
import './Loading.css';
import {Spinner} from "react-bootstrap";

const Loading = ({isLoading, children}) => {
    return (
        <div className="position-relative h-100">
            <div className={`${isLoading ? 'loading-children' : 'h-100'}`}>
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