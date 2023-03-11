import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css';
const AxiosEx = () => {
  const url = " https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(url)
      .then((Response) => {
        console.log(Response.data)
        setData(Response.data)
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <h5> AxiosExample</h5>
      {data.map((item) => {
        return (
          <>
            <table border={1}>
              <tr >
                <td key={item.id}>{item.name}</td>
                 <td key={item.id}>{item.email}</td>
                <td key={item.id}>{item.address.city}</td>
                <td key={item.id}>{item.company.name}</td>
              </tr>
              
            </table>
          </>)
      })}
    </>
  );
};
export default AxiosEx;
