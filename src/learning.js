import React from 'react';
import {Route,Routes} from 'react-router-dom';
import DetailPage from './details';
import Home from './Home';
import NavBar from './nav';
const Learning=()=>{
    
    return(
        <div>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='details' element={<DetailPage/>}/>
            </Routes>
        </div>
    )
}
export default Learning;