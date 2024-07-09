import {Button, Modal} from "react-bootstrap";
import {Error, Info, Warning} from "@mui/icons-material";

const generateIcon = (type) => {
    switch(type){
        case 'warning':
            return <Warning className="fs-1 text-warning"/>
        case 'info':
            return <Info className="fs-1 text-info"/>
        case 'error':
            return <Error className="fs-1 text-danger"/>
        default:
            return <Info className="fs-1 text-info"/>
    }
}

const okColor = (type) => {
    switch(type){
        case 'warning':
            return 'danger';
        case 'info':
            return 'info';
        case 'error':
            return 'danger';
        default:
            return 'info';
    }

}

const MessageBox = ({message, header, type, option, onOk, show, setShow}) => {
    const close = () => setShow(false);

    return (
        <Modal show={show} className="text-light" onHide={close}>
            <div className="secondary-bg rounded-2 border-2 border-secondary p-2">
                <header className="d-flex justify-content-between align-items-center">
                    <h3>{header}</h3>
                    <Button className="secondary-bg-light" variant="dark" onClick={close}>X</Button>
                </header>
                <hr/>
                <div className="container-fluid">
                    <div className="row mb-4 align-items-center">
                        <div className="col-auto">
                            {generateIcon(type)}
                        </div>
                        <div className="col-auto">
                            <p className="p-0 m-0">{message}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-end">
                                {option?.includes('ok') && (
                                    <Button variant={okColor(type)}
                                            className="mx-2 px-4" onClick={onOk}>אישור</Button>
                                )}
                                {option?.includes('cancel') && (
                                    <Button variant="secondary"
                                            className="px-4"
                                            onClick={close}>ביטול</Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default MessageBox;