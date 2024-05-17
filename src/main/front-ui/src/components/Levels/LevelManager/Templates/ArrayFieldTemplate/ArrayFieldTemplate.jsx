import {ArrayFieldTemplateProps} from "@rjsf/utils";
import {Accordion} from "react-bootstrap";
import React from "react";
import './ArrayFieldTemplate.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const ArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {

    //TODO: may be change it to more generic way
    const getFullName = (index: number) => {
        const fn = props?.formData[index]?.firstName;
        const ln = props?.formData[index]?.lastName;
        return (!fn && !ln) ? undefined : [fn, ln].filter(name => name).join(' ');
    }


    return (
        <div className="text-light">
            {props.canAdd && (
                <div className="position-relative add-icon">
                    <AddCircleOutlineIcon role="button"
                                          className="fs-2"
                                          onClick={props.onAddClick}/>
                </div>
            )}
            <Accordion defaultActiveKey={0} className="overflow-x-hidden overflow-y-auto"
                       style={{maxHeight: "50vh"}}>
                {props.items.map(element => (
                    <Accordion.Item eventKey={element.index} key={element.index}>
                        <Accordion.Header>
                            <span>{getFullName(element.index) || props.title}</span>

                        </Accordion.Header>
                        <Accordion.Body className="text-light container-fluid">
                            {element.hasRemove && props.items.length !== 1 && (
                                <DeleteForeverIcon role="button"
                                                   className="text-danger"
                                                   onClick={element.onDropIndexClick(element.index)}/>
                            )}
                            {element.children}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}


export default ArrayFieldTemplate;