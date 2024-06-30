import {createContext, useEffect, useState} from "react";
import {useGet} from "../Classes/RequestHooks";
import Endpoints from "../Classes/Endpoints";


export const TokenContext = createContext({
    token: null,
    setToken: () => {},
});


export const TokenProvider = ({children}) => {
    const [token, setToken] = useState({});
    const {data, fetchApi} = useGet();

    useEffect(() => {
        fetchApi(Endpoints.TOKEN_ENDPOINT);
    }, []);

    useEffect(() => {
        setToken({
            token: data?.token,
            headerName: data?.headerName,
        })
    }, [data]);

    return (
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    );
}

