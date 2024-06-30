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
            .catch(setError)
            .finally(() => setIsLoading(false));
    }

    static use = (urlOptions) => {
        const [isLoading, setIsLoading] = useState(false);
        const [data, setData] = useState(null);
        const [error, setError] = useState({});
        const [isOK, setIsOK] = useState(false);

        const fetchApi = useCallback((endpoint, body) => {
            const newUrlOptions = {...urlOptions};
            if (body) {
                newUrlOptions.body = JSON.stringify(body);
            }

            this.#fetchWithHook(newUrlOptions,
                endpoint,
                setIsLoading,
                setData,
                setError,
                setIsOK);
        },[]);

        return {
            isLoading,
            data,
            error,
            fetchApi,
            isOK};
    }
}
//</editor-fold>

const useDefaultHeaders = () => {
    const {token} = useContext(TokenContext);

    return {
        [token?.headerName]: token?.token,
        "charset": "UTF-8",
        'Content-Type': 'application/json',
    }
}

//<editor-fold desc="RequestHooks.useGet">
const useGet = () => {
    const urlOptions = {
        method: 'GET',
        headers: useDefaultHeaders(),
        credentials: 'include'
    }
    return RequestHooks.use(urlOptions);
}
//</editor-fold>

//<editor-fold desc="RequestHooks.usePost">
const usePost = () => {
    const urlOptions = {
        method: 'POST',
        headers: useDefaultHeaders(),
        credentials: 'include',
    }
    return RequestHooks.use(urlOptions);
};
//</editor-fold>

//<editor-fold desc="RequestHooks.usePut">
const usePut = () => {
    const urlOptions = {
        method: 'PUT',
        headers: useDefaultHeaders(),
        credentials: 'include'
    }
    return RequestHooks.use(urlOptions);
};
//</editor-fold>

//<editor-fold desc="RequestHooks.useDelete">
const useDelete = () => {
    const urlOptions = {
        method: 'DELETE',
        headers: useDefaultHeaders(),
        credentials: 'include'
    }
    return RequestHooks.use(urlOptions);
};
//</editor-fold>


export {useGet, usePost, usePut, useDelete};