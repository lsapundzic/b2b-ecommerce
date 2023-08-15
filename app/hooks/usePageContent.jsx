/*
isLoading Use State has two purposes. 

1. Until the data is fetched there needs to be a placeholder, otherwise only initial state 
will be passed to variables and will not be overwritten once fetch is complete. 

2. It is used for controling placeholder UI elements
*/

import { useState, useEffect } from "react";

export function usePageContent(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch data. HTTP response status: ${response.status}`
          );
        }

        const fetchedData = await response.json();
        setData(fetchedData);
        setLoading(false);
        console.log("Data fetched: ", fetchedData);
      } catch (error) {
        console.error(
          "General error occurred while fetching data. Message: ",
          error
        );
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading };
}
