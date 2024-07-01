import React, {useCallback, useContext, useState} from "react";
import {TokenContext} from "../Provider/TokenProvider";

//<editor-fold desc="RequestHooks">
class RequestHooks {

    static #fetch = (urlOptions, endpoint) => {
        return fetch(endpoint, urlOptions)
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(text || 'מצטערים... משהו השתבש');
                    });
                }
                return response.json();
            });
    }

    static #fetchWithHook = (urlOptions, endpoint, setIsLoading, setData, setError, setIsOK) => {
        setIsLoading(true);
        setData(null);
        setError(null);
        setIsOK(false);

        this.#fetch(urlOptions, endpoint)
            .then((data) => {
                setData(data);
                setIsOK(true);
            })
            .catch((error) => {
                setError(error);
                setIsOK(false);
            })
            .finally(() => setIsLoading(false));
    }

    static use = (method) => {
        const [isLoading, setIsLoading] = useState(false);
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
        const [isOK, setIsOK] = useState(false);
        const { token } = useContext(TokenContext);


        const fetchApi = useCallback((endpoint, body) => {
            const urlOptions = {
                method: method,
                headers: {
                    [token?.headerName]: token?.token,
                    "charset": "UTF-8",
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: body ? JSON.stringify(body) : undefined
            };

            this.#fetchWithHook(urlOptions, endpoint, setIsLoading, setData, setError, setIsOK);
        },[method, token]);

        return {isLoading, data, error, fetchApi, isOK};
    }
}
//</editor-fold>



//<editor-fold desc="RequestHooks.useGet">
const useGet = () => {
    return RequestHooks.use('GET');
}
//</editor-fold>

//<editor-fold desc="RequestHooks.usePost">
const usePost = () => {
    return RequestHooks.use('POST');
};
//</editor-fold>

//<editor-fold desc="RequestHooks.usePut">
const usePut = () => {
    return RequestHooks.use('PUT');
};
//</editor-fold>

//<editor-fold desc="RequestHooks.useDelete">
const useDelete = () => {
    return RequestHooks.use('DELETE');
};
//</editor-fold>


export {useGet, usePost, usePut, useDelete};