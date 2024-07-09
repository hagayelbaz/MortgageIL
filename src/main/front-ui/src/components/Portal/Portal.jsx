import React, {useEffect, useState} from "react";
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
import {HelpOutline, PersonOutline} from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TimelineIcon from '@mui/icons-material/Timeline';
import DescriptionIcon from '@mui/icons-material/Description';
import logo from '../../assets/logo1.webp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const Portal = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="d-flex vh-100 p-0 m-0 text-light">
            <Sidebar collapsed={collapsed} rootStyles={menuStyle}>
                <Menu>
                    <div className="mt-3 mb-5 d-flex justify-content-around align-items-center">
                        {!collapsed && <h1 className="font-600 fs-5 mx-2">MortgageIL</h1>}
                        <button className="button-no-style text-light" onClick={toggleCollapsed}>
                            <MenuIcon className="fs-2 me-2"/>
                        </button>
                    </div>

                    <MenuItem component={<Link to=""/>} icon={<CottageIcon className="text-light"/>}> בית </MenuItem>

                    <SubMenu label="פרטים אישיים" icon={<PersonOutline className="text-light"/>}>
                        <MenuItem icon={<AttachMoneyIcon className="text-light"/>}> הכנסות </MenuItem>
                        <MenuItem icon={<MoneyOffIcon className="text-light"/>}> הוצאות </MenuItem>
                        <MenuItem component={<Link to="borrowers"/>}
                                  icon={<SupervisorAccountIcon className="text-light"/>}> לווים </MenuItem>
                    </SubMenu>

                    <MenuItem component={<Link to="mortgageTrack"/>}
                              icon={<TimelineIcon className="text-light"/>}> מסלולים </MenuItem>
                    <MenuItem icon={<DescriptionIcon className="text-light"/>}> מסמכים </MenuItem>
                    <MenuItem icon={<HelpOutline className="text-light"/>}> מידע למשתמש </MenuItem>
                </Menu>
                <hr/>
                <Menu className="bottom-sidebar">
                    <MenuItem icon={<SettingsIcon className="text-light"/>}> הגדרות </MenuItem>
                    <MenuItem icon={<LogoutIcon className="text-light"/>}> התנתקות </MenuItem>
                </Menu>
            </Sidebar>
            <Outlet/>
        </div>
    );
}

export default Portal;







