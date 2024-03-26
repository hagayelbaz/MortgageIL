import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../shared.css';
import './Portal.css';
import {Menu, menuClasses, MenuItem, Sidebar, sidebarClasses, SubMenu} from "react-pro-sidebar";
import {AiFillCar, AiFillCaretDown, AiOutlineMenu} from "react-icons/ai";
import {FaBell, FaHome} from "react-icons/fa";
import {TbListDetails} from "react-icons/tb";
import {GiChart, GiPayMoney, GiReceiveMoney} from "react-icons/gi";
import {BsPeopleFill} from "react-icons/bs";
import {MdOutlineRealEstateAgent} from "react-icons/md";
import {IoDocumentAttach} from "react-icons/io5";
import {Link, Outlet} from "react-router-dom";
import {Vars} from "../../Vars";
import Color from "../../Classes/Color";
import {Badge} from "react-bootstrap";
import {menuStyle} from "./style";


const Portal = () => {
    const [collapsed, setCollapsed] = useState(false);


    return (
        <div className="d-flex vh-100 p-0 m-0">
            <Sidebar collapsed={collapsed} rootStyles={menuStyle}>
                <Menu>
                    <MenuItem className="mb-5" onClick={() => setCollapsed(!collapsed)}
                              icon={<AiOutlineMenu/>}></MenuItem>
                    <MenuItem component={<Link to=""/>} icon={<FaHome/>}> בית </MenuItem>

                    <SubMenu label="פרטים אישיים" icon={<TbListDetails/>}>
                        <MenuItem icon={<GiReceiveMoney/>}> הכנסות </MenuItem>
                        <MenuItem icon={<GiPayMoney/>}> הוצאות </MenuItem>
                        <MenuItem icon={<BsPeopleFill/>}> לווים </MenuItem>
                    </SubMenu>

                    <MenuItem icon={<MdOutlineRealEstateAgent/>}> מסלולים </MenuItem>
                    <MenuItem icon={<IoDocumentAttach/>}> מסמכים </MenuItem>
                    <MenuItem icon={<FaBell/>} component={<Link to="reminders"/>}
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







