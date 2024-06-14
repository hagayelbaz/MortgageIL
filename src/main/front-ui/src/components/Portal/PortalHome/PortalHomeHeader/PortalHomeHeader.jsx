import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import {Badge, Dropdown} from "react-bootstrap";

const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
    <ExpandMoreIcon ref={ref}
                    role="button"
                    onClick={(e) => {
                        e.preventDefault();
                        onClick(e);
                    }}>
        {children}
        &#x25bc;
    </ExpandMoreIcon>
));

const PortalHomeHeader = () => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="d-flex justify-content-between p-3 secondary-bg">
            <p className="fs-5">צהריים טובים חגי</p>
            <div className="">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <div className="position-relative">
                                <NotificationsIcon role="button"/>
                                <Badge pill bg="danger"
                                       style={{fontSize: "0.6rem"}}
                                       className="position-absolute top-0 start-0 translate-middle">
                                    9
                                </Badge>
                            </div>

                        </div>
                        <div className="col-auto">
                            <SettingsIcon role="button"/>
                        </div>
                        <div className="d-flex align-items-center col-auto">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile"
                                 className="rounded-circle" width="40" height="40"/>
                            <div className="mx-2 lh-1">
                                <p className="font-500 fs-6 p-0 m-0">חגי אלבז</p>
                                <small className="">משתמש</small>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle}/>

                                <Dropdown.Menu className="custom-menu" show={dropdownOpen} >
                                    <Dropdown.Item href="#/action-1">פרטי חשבון</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortalHomeHeader;