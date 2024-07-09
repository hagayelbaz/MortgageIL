import React, {useEffect} from "react";
import Endpoints from "../../../Classes/Endpoints";
import {useGet} from "../../../Classes/RequestHooks";

const PortalReminders = () => {
    const {
        isLoading: isGetLoading,
        data: getData,
        error: getError,
        fetchApi: fetchGetApi
    } = useGet();

    const handleClick = () => {
        fetchGetApi(Endpoints.USERS_ENDPOINT);
    }

    useEffect(() => {
        console.log(`isGetLoading: ${isGetLoading}`);
    }, [isGetLoading]);


    return (
        <div className="secondary-bg-light container-fluid overflow-auto">
            <button className="btn btn-danger" onClick={handleClick}>
                Reminders
            </button>
            {isGetLoading && <p>Loading...</p>}
            {getError && <p>Error: {getError.message}</p>}
            {getData && (
                <ul>
                    {getData.map(user => (
                        <li key={user.id}>
                            {user.firstName}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}

export default PortalReminders;