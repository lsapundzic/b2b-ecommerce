import axios from "axios";
import { useEffect, useState } from "react";

const SingleType = ({ partialURL }) => {
  console.log(`${partialURL}.jsx running...`);
  const [page, setPage] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/${partialURL}`)
      .then((response) => {
        console.log("Status: ", response.status, "\nResponse: ", response.data);
        setPage(response.data.data.attributes);
      })
      .catch((response) => {
        console.log(`Error in ${partialURL}.jsx, message: ${response.message}`);
      });
  }, []);

  return (
    <div>
      <h1>{page.Title}</h1>
      <p>{page.Body}</p>
    </div>
  );
};

export default SingleType;