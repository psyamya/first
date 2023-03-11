import React from 'react'
import Home from './Home'
import NavBar from './nav';
import { Route, Routes} from 'react-router-dom'
import Student from './Student';
import Grades from './Grades';
import Courses from './Courses';
import ButtonLogin from './ButtonLogin';
import Page404 from './404';
 function App() {
  return (
    <>
    
      <NavBar/>
      <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/Student' element={ <Student/>}/>
      <Route path='/Grades' element={ <Grades/>}/>
      <Route path='/Courses' element={ <Courses/>}/>
      <Route path='/Login' element={ <ButtonLogin/>}/>
      <Route path='*' element={ <Page404/>}/>
  </Routes>
  
  </>
    
  );
}
export default App;
