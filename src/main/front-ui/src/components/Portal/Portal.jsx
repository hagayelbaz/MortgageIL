import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../shared.css';
import './Portal.css';
import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";
import {Link, Outlet} from "react-router-dom";
import {Badge} from "react-bootstrap";
import {menuStyle} from "./style";


const Portal = () => {
    const [collapsed, setCollapsed] = useState(false);


    return (
        <div className="d-flex vh-100 p-0 m-0">
            <Sidebar collapsed={collapsed} rootStyles={menuStyle}>
                <Menu>
                    <MenuItem className="mb-5" onClick={() => setCollapsed(!collapsed)}
                              icon={<></>}></MenuItem>
                    <MenuItem component={<Link to=""/>} icon={<></>}> בית </MenuItem>

                    <SubMenu label="פרטים אישיים" icon={<></>}>
                        <MenuItem icon={<></>}> הכנסות </MenuItem>
                        <MenuItem icon={<></>}> הוצאות </MenuItem>
                        <MenuItem icon={<></>}> לווים </MenuItem>
                    </SubMenu>

                    <MenuItem icon={<></>}> מסלולים </MenuItem>
                    <MenuItem icon={<></>}> מסמכים </MenuItem>
                    <MenuItem icon={<></>} component={<Link to="reminders"/>}
                              suffix={<Badge className="rounded-circle bg-danger">6</Badge>}>
                        תזכורות
                    </MenuItem>
                </Menu>
            </Sidebar>
            <Outlet/>
        </div>
    );
}

export default Portal;







