import React from 'react';
import { useNavigate } from 'react-router-dom';
const Grades = () => {
    const navigate=useNavigate();
    return (
        <div>
            <h4> Grades Page</h4>
            <button onClick={ () =>{navigate(-1);}}>Go Back</button>
        </div>
    );
};

export default Grades;