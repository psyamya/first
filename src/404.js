import React from 'react';
import { useNavigate } from 'react-router-dom';
const Page404 = () => {
    const avigate=useNavigate();
    return (
        <div>
            <h4>PAGE NOT FOUND</h4>
            <button onClick={ () =>{avigate(-1);}}>Go Back</button>
        </div>
    );
};

export default Page404;