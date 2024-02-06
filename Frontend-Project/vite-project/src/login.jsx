import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', {fullname, password})
    .then(result => {(result.data === "Logged in Successfully" )?navigate("/home"):alert("Invalid Credentials");
    console.log(result)
  })
    .catch(err=> {console.log(err);
    })
  }

    
    return(
       <div className="w-3/6 h-3/4  font-bold" >
            
                <div className="text-xl w-full h-20 bg-slate-900 text-white  text-center justify-center items-center flex font-extrabold ">
                    <h1>SUPPORT DESK</h1>
                </div>
                <form onSubmit={handleSubmit} >
                <input type="text" placeholder="  FULL NAME" onChange={(e) => setFullname(e.target.value)} className="w-full h-20 text-black text-center"/>
                <input type="text" placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)} className="w-full h-20  text-black text-center"/>
                <div className="w-full h-20 flex "><button type="submit" className="text-xl   w-1/2 bg-slate-800 text-center  justify-center items-center  text-white">LOGIN</button> <Link to='/Register'  className="text-xl  flex text-center bg-slate-900 justify-center items-center w-1/2 text-white" >REGISTER</Link></div>
                </form>
        </div>
    );
  
    }
export default Login;