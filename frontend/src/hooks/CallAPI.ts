import {useEffect} from "react";

const CallAPI = (
    url,
    apiMethod,
    body,
    setData,
    setLoading,
    setError
) => {

    useEffect(() => {
        const fetchData = async () =>  {

            setLoading(true);

            const options = {
                method: apiMethod,
                headers: {
                    "Content-Type": "application/json",
                },
                body: body,
            }

            try {

                if (body) {
                   options.body = JSON.stringify(body);
                }

                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                setData(data);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                if (setLoading) setLoading(false);
            }
        };

        fetchData();

    }, []);
}

export default CallAPI;