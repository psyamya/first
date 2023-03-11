import React from 'react';
import { useNavigate } from 'react-router-dom';

const Student = () => {
    const Navigate=useNavigate();
    return (
        <div>
            <h4> Student Details Page</h4>
            <button onClick={ () =>{Navigate(-1);}}>Go Back</button>
        </div>
    );
};

export default Student;