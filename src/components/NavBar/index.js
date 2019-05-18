import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = props => {
  const {  } = props

  return (
    <nav>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>         
       </ul>
     </nav>
    )
}

export default NavBar
