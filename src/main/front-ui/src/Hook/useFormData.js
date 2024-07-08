import {useState, useCallback, useEffect} from 'react';
import {usePost, usePut} from "../Classes/RequestHooks";
import {useNotifications} from "../Provider/NotificationProvider";

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

const defaultSuccessMessage = {
    header: 'שמירה בוצעה בהצלחה',
    message: 'הנתונים נשמרו בהצלחה'
}

const defaultErrorMessage = {
    header: 'שגיאה בשמירת נתונים',
    message: 'שמירת הנתונים נכשלה, אנא נסה שנית'
}

const useFormData = (initialData, updateGlobalData, apiPath, messagesOption) => {
    const [data, setData] = useState(initialData);
    const {addNotification} = useNotifications();
    const {fetchApi: postData, isOK: postIsOK, error: postError} = usePost();
    const {fetchApi: putData, isOK: putIsOK, error: putError} = usePut();
    const [isDataSaved, setIsDataSaved] = useState(false);

    const updateData = useCallback((path, value) => {
        setData(prev => setNestedProperty(path, value, prev));
    }, []);


    const saveData = useCallback(() => {
        if (data?.isNew) {
            postData(apiPath, data);
        } else {
            putData(apiPath.addPath(data.id), data);
        }
        setIsDataSaved(true);
    }, [postData, putData, apiPath, data]);

    const onChange = useCallback((event) => {
        const {name, value} = event.target;
        updateData(name, value);
    }, [updateData]);

    const setDataFromProps = useCallback((props) => {
        setData(props);
    }, []);


    useEffect(() => {
        const notification =  (type) => {
            addNotification({
                type: type,
                ...messagesOption ||
                (type === 'success' ? defaultSuccessMessage : defaultErrorMessage)
            });
        }
        if ((postIsOK || putIsOK) && isDataSaved) {
            updateGlobalData(data);
            notification('success');
            setIsDataSaved(false);
        }
        if ((postError === true || putError === true) && isDataSaved) {
            notification('error');
            setIsDataSaved(false);
        }


    }, [postError, putError, postIsOK, putIsOK]);


    return {
        data,
        updateData,
        onChange,
        saveData,
        setDataFromProps
    };
};

export default useFormData;
