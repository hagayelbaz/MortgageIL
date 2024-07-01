import {createContext, useEffect, useMemo, useState} from "react";
import {useGet} from "../Classes/RequestHooks";
import Endpoints from "../Classes/Endpoints";


export const TokenContext = createContext({
    token: { token: null, headerName: null },
    setToken: () => {},
});



export const TokenProvider = ({children}) => {
    const [token, setToken] = useState({ token: null, headerName: null });
    const {data, fetchApi} = useGet();

    useEffect(() => {
        fetchApi(Endpoints.TOKEN_ENDPOINT);
    }, []);

    useEffect(() => {
        if (data?.token && data?.headerName) {
            setToken({ token: data.token, headerName: data.headerName });
        }
    }, [data]);

    const contextValue = useMemo(() => ({ token, setToken }), [token]);


    return (
        <TokenContext.Provider value={contextValue}>
            {children}
        </TokenContext.Provider>
    );
}

