import React, {useEffect, useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "react-bootstrap";

const CheckboxOptions = ({data, header, type, selectedYear}) => {
    const values = type === 'year' ?
        Array.from(
            new Set(data.map(item => new Date(item.date)
                .getFullYear()))).sort() :
        Array.from(
            new Set(data.map(item => new Date(item.date).toLocaleDateString("he-IL", {month: "short"})))).sort();


    return (
        <Dropdown className='d-inline-block ps-3'>
            <DropdownToggle className='p-0' variant="" id="dropdown-basic">
                {header}
            </DropdownToggle>
            <DropdownMenu>
                {values.map((val, index) => (
                    <DropdownItem key={index}>
                        <input type="checkbox" name="year"/>
                        <label>{val}</label>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default CheckboxOptions;
