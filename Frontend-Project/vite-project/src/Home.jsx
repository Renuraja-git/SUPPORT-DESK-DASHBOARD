import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="w-1/2 h-100 bg-slate-500 text-center  ">
            <h1 className=" w-full h-20 text-white  bg-slate-900 text-xl justify-center items-center flex text-center font-extrabold">SUPPORT DESK</h1>
            
            <ul className="text-white h-50">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/support">Support(Click here to Add/View tickets)</Link></li>                              
                <li><Link to="/login">Logout</Link></li>
            </ul>
           
           <div className="bg-slate-900 text-white w-full"> <p>Already have an Account?</p><Link to="/login" className="text-white font-extrabold">LOGIN</Link></div>
            <div className="bg-slate-900 text-white w-full"><p>Create new Account? </p> <Link to="/register" className="text-white font-extrabold">REGISTER</Link></div>

        </div>
    );
}

export default Home;
