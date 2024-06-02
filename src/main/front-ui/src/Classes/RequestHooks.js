import {useCallback, useState} from "react";

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

        const fetchApi = useCallback((endpoint) => {
            this.#fetchWithHook(urlOptions, endpoint, setIsLoading, setData, setError, setIsOK);
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

//<editor-fold desc="RequestHooks.useGet">
const useGet = () => {
    const urlOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return RequestHooks.use(urlOptions);
}
//</editor-fold>

//<editor-fold desc="RequestHooks.usePost">
const usePost = () => {
    const urlOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return RequestHooks.use(urlOptions);
};
//</editor-fold>

//<editor-fold desc="RequestHooks.usePut">
const usePut = () => {
    const urlOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return RequestHooks.use(urlOptions);
};
//</editor-fold>

//<editor-fold desc="RequestHooks.useDelete">
const useDelete = () => {
    const urlOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return RequestHooks.use(urlOptions);
};
//</editor-fold>


export {useGet, usePost, usePut, useDelete};