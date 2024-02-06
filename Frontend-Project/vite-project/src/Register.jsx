import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Register(){
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
  

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/register', {fullname, email, password})
        .then(result=>{console.log(result);
        alert("Registered Successfully");
    navigate("/login");
})
        .catch(err=>console.log(err))
}

    return(
        <div className="w-3/6 h-3/4  font-bold rounded" >
            
        <div className="w-full h-20 bg-slate-900 text-white  text-center text-xl justify-center items-center flex font-extrabold ">
            <h1>REGISTER</h1>
        </div>
        <form  onSubmit={handleSubmit}>
        <input type="text" placeholder="FULL NAME" onChange={(e) => setFullname(e.target.value)} className="w-full h-20 text-center"/>
        <input type="text" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)} className="w-full h-20 text-center"/>
        <input type="text" placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)} className="w-full h-20 text-center"/>
        <button type="submit" className=" py-10 text-center bg-slate-900 justify-center items-center w-full h-25 text-white text-xl">SUBMIT</button>
        </form>
</div>
    );
}

export default Register;