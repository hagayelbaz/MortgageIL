import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../shared.css';
import './Portal.css';
import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";
import {Link, Outlet} from "react-router-dom";
import {Badge} from "react-bootstrap";
import {menuStyle} from "./style";
import MenuIcon from '@mui/icons-material/Menu';
import CottageIcon from '@mui/icons-material/Cottage';
import {Vars} from "../../Vars";

const Portal = () => {
    const [collapsed, setCollapsed] = useState(false);


    return (
        <div className="d-flex vh-100 p-0 m-0 text-light">
            <Sidebar collapsed={collapsed} rootStyles={menuStyle}>
                <Menu>
                    <MenuItem className="mb-5" onClick={() => setCollapsed(!collapsed)}
                              icon={<MenuIcon className="text-light"/>}></MenuItem>
                    <MenuItem component={<Link to=""/>} icon={<CottageIcon className="text-light"/>}> בית </MenuItem>

                    <SubMenu label="פרטים אישיים" icon={<CottageIcon className="text-light"/>}>
                        <MenuItem icon={<CottageIcon className="text-light"/>}> הכנסות </MenuItem>
                        <MenuItem icon={<CottageIcon className="text-light"/>}> הוצאות </MenuItem>
                        <MenuItem component={<Link to="borrowers"/> } icon={<CottageIcon className="text-light"/>}> לווים </MenuItem>
                    </SubMenu>

                    <MenuItem icon={<CottageIcon className="text-light"/>}> מסלולים </MenuItem>
                    <MenuItem icon={<CottageIcon className="text-light"/>}> מסמכים </MenuItem>
                    <MenuItem icon={<CottageIcon className="text-light"/>} component={<Link to="reminders"/>}
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







