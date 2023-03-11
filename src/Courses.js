import React from 'react';
import { useNavigate } from 'react-router-dom';
const Courses = () => {
    const vigate=useNavigate();
    return (
        <div>
            <h4>Courses Page</h4>
            <button onClick={ () =>{vigate(-1);}}>Go Back</button>
        </div>
    );
};

export default Courses;