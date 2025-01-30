import {useEffect} from "react";
import {data} from "react-router-dom";

const CallAPI = ({
                     url,
                     apiMethod,
                     body = null,
                     headers = {},
                     setData,
                     setLoading,
                     setError
}) => {



        const fetchData = async () =>  {

            if (setLoading) setLoading(true);
            if (body) body = JSON.stringify(body);

            const options = {
                method: apiMethod,
                headers: {
                    "Content-Type": "application/json",
                    ...headers,
                },
                body: body,
            }

            try {

                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                setData(data);
            } catch (error) {
                console.error(error);
                if (setError) setError(true);
            } finally {
                if (setLoading) setLoading(false);
            }
        };

        fetchData();

};

export default CallAPI;