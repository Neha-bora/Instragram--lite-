import React from "react";
import { Link } from "react-router-dom";

const Signin = () =>{
    return(
        <div className="myCard">
             <div className="card  auth-card input-field">
             <h2> Instagram</h2>
             <input
                 type="text"
                 placeholder="Email"
             />

            <input
                type="text"
                placeholder="password"
            />
            <button class="btn waves-effect waves-light #64b5f6 blue darken-1">
                   Login
             </button>
             <h5>
            <Link to ="signup"> Dont have an account</Link>
            </h5>
            
                
            </div>
           
        </div>
    )
}

export default Signin;