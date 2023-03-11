import React from 'react';
import { useNavigate } from 'react-router-dom';
const  DetailPage= () => {
    const Navigate = useNavigate();
    return (
        <div>
            <h5> Details Page</h5>
            <button onClick={()=>{Navigate(-1);}}>Go Back</button>
        </div>
    )
}
export default DetailPage;