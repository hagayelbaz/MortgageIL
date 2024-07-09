import {useGet} from "../../Classes/RequestHooks";
import {useEffect, useState} from "react";

const withFetch = (WrappedComponent) => {
    return ({endpoint, dataMapping, ...props}) => {
        const {data, fetchApi, isLoading, error, isOK} = useGet();
        const [mappedData, setMappedData] = useState(null);

        useEffect(() => {
            fetchApi(endpoint);
        }, [endpoint, fetchApi]);

        useEffect(() => {
            if(isOK && dataMapping) {
                setMappedData(dataMapping(data));
            }
        }, [isOK]);


        return (
            <WrappedComponent {...props}
                              data={mappedData ? mappedData : data}
                              isLoading={isLoading}
                              isOK={isOK}
                              error={error}/>
        );
    }
}


export default withFetch;