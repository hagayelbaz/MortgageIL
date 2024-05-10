import {useCallback, useState} from "react";

class RequestHooks {

    static #fetch = (urlOptions, endpoint) => {
        return fetch(endpoint, urlOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            });
    }

    static #fetchWithHook = (urlOptions, endpoint, setIsLoading, setData, setError) => {
        setIsLoading(true);
        setData(null);
        setError(null);
        this.#fetch(urlOptions, endpoint)
            .then(setData)
            .catch(setError)
            .finally(() => setIsLoading(false));
    }

    static use = (urlOptions) => {
        const [isLoading, setIsLoading] = useState(false);
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);

        const fetchApi = useCallback((endpoint) => {
            this.#fetchWithHook(urlOptions,
                endpoint,
                setIsLoading,
                setData,
                setError);
        },[]);
        return {isLoading, data, error, fetchApi};
    }
}

const useGet = () => {
    const urlOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return RequestHooks.use(urlOptions);
}

const usePost = () => {
    const urlOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return RequestHooks.use(urlOptions);
};

const usePut = () => {
    const urlOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return RequestHooks.use(urlOptions);
};

const useDelete = () => {
    const urlOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return RequestHooks.use(urlOptions);
};


export {useGet, usePost, usePut, useDelete};