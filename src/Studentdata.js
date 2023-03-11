import React from "react";
const Student =()=>{
const Studentdata = [
    {
        id: 1,
        name: "Syamya",
        branch: " IT"

    },
    {
        id: 2,
        name: "Ramya",
        branch: " IT"

    }
];

return (
    <>
        <h1>Student data</h1>
        {Studentdata.map((item) => { return <li  >{item.name} {item.branch}</li>; })}
    </>
)}
export default Student;