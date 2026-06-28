import React from "react";
import {BrowserRouter as Router,Routes,Route,Link}from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

// function Routes1(){
//     return (
//         <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<Home/>}></Route>
//             <Route path='log' element={<Login/>} ></Route>
//         </Routes>
//         </BrowserRouter>
//     )
// }
// export default Routes1;
function Routes1(){
return(
<Router>
<div>
  {/* Navigation Links */}
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">Login</Link>
      </li>
    </ul>
  </nav>

  {/* Routes */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<Login/>} />
  </Routes>
</div>
</Router>
)
}

export default Routes1;