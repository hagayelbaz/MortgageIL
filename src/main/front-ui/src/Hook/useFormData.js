import {useState, useCallback, useEffect} from 'react';

const setNestedProperty = (path, value, obj) => {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const lastObj = keys.reduce((o, key) => {
        if (!o[key]) o[key] = {};
        return o[key];
    }, obj);
    lastObj[lastKey] = value;
    return {...obj};
};

const useFormData = (initialData, setUpdated) => {
    const [data, setData] = useState(initialData);

    const updateData = useCallback((path, value) => {
        setData(prev => setNestedProperty(path, value, prev));
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateData(name, value);
    };

    useEffect(() => {
        setUpdated(data);
    }, [data]);

    return {
        data,
        updateData,
        handleChange
    };
};

export default useFormData;
