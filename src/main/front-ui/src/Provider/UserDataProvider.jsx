import {createContext, useEffect, useState} from "react";
import {useGet} from "../Classes/RequestHooks";
import {TokenContext} from "./TokenProvider";
import Endpoints from "../Classes/Endpoints";

export const UserDataContext = createContext({
    user: null,
    setUser: () => {},
});


export const UserDataProvider = ({children}) => {
    const [user, setUser] = useState({});
    const {data, fetchApi} = useGet();

    useEffect(() => {
        fetchApi(Endpoints.USER_DATA_ENDPOINT);
    }, []);

    useEffect(() => {
        setUser(data)
    }, [data]);

    return (
        <UserDataContext.Provider value={{user, setUser}}>
            {children}
        </UserDataContext.Provider>
    );
}
