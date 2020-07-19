import React from "react"
import App from "../App";
import "../App.css"
import { Link } from "react-router-dom";

const NavBar = () =>(
        <nav>
        <div className="nav-wrapper white">
          <Link to="#" className="brand-logo left">Instagram</Link>
          <ul id="nav-mobile" className="right ">
            <li><Link to="/signin">Login</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/CreatePost">Create post</Link></li>

          </ul>
        </div>
        </nav>
    )

export default NavBar;