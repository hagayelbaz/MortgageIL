import React, {useEffect, useState} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import '../../shared.css';
import {Dropdown} from "react-bootstrap";
import './Toggle.css';


const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
    <button ref={ref} className="button button-outline w-100 d-flex justify-content-between align-items-center"
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}>
        {children}
        <ExpandMoreIcon/>
    </button>
));


const Toggle = ({items = [], className, onChange, defaultHeader, style, name}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(defaultHeader);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleItemSelect = (e, item, index) => {
        setSelectedItem(item);
        setDropdownOpen(false);
        if (onChange)
            onChange({...e, target: {name: name, value: index, string: item}});
    };

    const isEmpty = () => !items || items.length === 0;

    return (
        <Dropdown show={dropdownOpen}
                  onToggle={toggleDropdown}
                  style={style}
                  className={`${className} ${isEmpty() ? 'disabled' : ''}`}>
            <Dropdown.Toggle as={CustomToggle}>
                {selectedItem}
            </Dropdown.Toggle>
            {!isEmpty() &&
                <Dropdown.Menu className="custom-menu" variant="dark">
                    {items.map((item, index) => (
                        <div role="button" className="text-color dropdown-item custom-toggle-item"
                             key={index} onClick={(e) => handleItemSelect(e, item, index)}>
                            {item}
                        </div>
                    ))}
                </Dropdown.Menu>
            }
        </Dropdown>
    );
};

export default Toggle;