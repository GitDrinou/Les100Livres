// @ts-ignore
import {CallAPIParams} from "../types/Types.ts";

const CallAPI = ({
                   url,
                   apiMethod,
                   body,
                   headers = {},
                   setData,
                   setDataAllBooks,
                   setTotalPages,
                   setTotalBooks,
                   setLoading,
                   setError
                 }: CallAPIParams) => {

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

      // @ts-ignore
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (apiMethod != "DELETE") {
        const data = await response.json();
        setData?.(data.content ? data.content: data);
        setDataAllBooks?.(data.content ? data.content: data);
        setTotalPages?.(data.totalPages);
        setTotalBooks?.(data.totalElements);
      }

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