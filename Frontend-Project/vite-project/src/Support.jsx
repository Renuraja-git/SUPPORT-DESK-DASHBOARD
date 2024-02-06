import React from "react";
import App from "./App";
import { Link } from "react-router-dom";

function Support(){
    return(
        <div className="w-1/2 h-1/2  text-xl text-white font-bold rounded">
        <div className=" w-full h-1/2 bg-slate-700  item-center justify-center text-center px-12 py-12 text-white ">HOW CAN I ASSIST YOU?</div>
       <div className="flex w-full h-full" ><Link to="/Addnewticket" className="flex justify-center items-center w-1/2 h-1/2 bg-slate-800 text-white ">ADD NEW TICKET</Link><Link to="/ticketstatustable" className=" flex text-center bg-slate-900 justify-center items-center w-1/2 h-1/2 text-white">VIEW TICKETS</Link>
        </div>
        </div>
    );
}

export default Support;