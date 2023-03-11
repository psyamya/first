import React from "react";
import { Link } from "react-router-dom";
const NavBar =() => {
    return(
        <div>
            <div style={{backgroundColor:'black',height:'30px',color:'Yellow'}}>
                <Link to='/'>Home</Link>
                <Link to='Student'>Student</Link>
                <Link to='Grades'>Grades</Link>
                <Link to='Courses'>Courses</Link>
                <Link to='Login'>Login</Link>
            </div>
        </div>
    )
}
export default NavBar;