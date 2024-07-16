import React, {useEffect, useState} from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Help from "../../../../Help/Help";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {ListGroup} from "react-bootstrap";
import EditAttributesIcon from '@mui/icons-material/EditAttributes';

const BanksCard = ({isLoading, error, isOK, data}) => {
    const [uniqueBanks, setUniqueBanks] = useState([]);

    useEffect(() => {
        if (data) {
            const uniqueBanks = data
                .filter((bank, index, self) =>
                    bank.bankCode !== 99 &&
                    index === self.findIndex(t => t.bankCode === bank.bankCode)
                );
            setUniqueBanks(uniqueBanks);
        }
    }, [data]);


    return (
        <div className="card secondary-bg card-data text-light h-100">
            <div className="card-body pb-0 mb-0">
                <h5 className="card-title card-data-header fs-4 fw-lighter p-0 m-0">
                    <span>הגשת בקשה לאישור עקרוני</span>
                    <Help text="מצורפים קישורים מהירים להגשת בקשה לאישור עקרוני בבנקים השונים." className="mx-1">
                        <HelpOutlineIcon className="muted-color"/>
                    </Help>
                </h5>
                <hr/>
                <ListGroup className="overflow-y-auto overflow-x-hidden"
                           style={{maxHeight: "40dvh"}}>
                    {uniqueBanks?.map((bank, index) => {
                        return (
                            <ListGroup.Item key={index} className="py-3 ms-1 my-1 border-0 rounded-1 d-flex justify-content-between secondary-bg-dark text-light">
                                <div>
                                    <img src={bank.logoUrl}
                                         alt={bank.name}
                                         height="25px"
                                         width="25px"
                                         className="img-fluid rounded-circle"/>
                                    <span className="mx-2">{`בנק ${bank.bank}`}</span>
                                </div>
                                <a href={bank.preApprovedUrl}
                                   target="_blank"
                                   className="btn success-bg text-light py-0">
                                    הגשה
                                </a>
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </div>
        </div>
    )
}

export default BanksCard;