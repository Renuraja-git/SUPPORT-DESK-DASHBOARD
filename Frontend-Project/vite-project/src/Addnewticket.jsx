import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Addnewticket(){
    const [ticket_id, setTicket_id] = useState('');
    const [createdat, setCreatedAt] = useState('');
    const [department, setDepartment] = useState('');
    const [priority, setPriority] = useState('');
    const [description, setDescription] = useState('');
    const [reportedby, setReportedby] = useState('');
    const [ticketstatus, setTicketstatus] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/addnewticket', {ticket_id, createdat, department, priority, description, reportedby,ticketstatus})
        .then(result=>{console.log(result)
            if(result){
                navigate('/TicketStatusTable')
            }
        })
        .catch(err=>console.log(err))

        }
        return(
            <div className="w-3/4  full h-3/4 bg-slate-900 text-center">
                
                
             <div className="w-full h-12 text-white  bg-slate-900 text-xl justify-center items-center flex text-center font-extrabold">ADD NEW TICKET</div>
               
                <form onSubmit={handleSubmit}>
                
                    <div className="text-black text-center bg-white">
                        
                   <div className="h-16 bg-slate-200 text-center " > <label className="w-1/3 ">TICKET_ID: </label><input type="text" placeholder="Put ticket_id next to the last created ticket_id" onChange={(e) => setTicket_id(e.target.value)} className="w-3/4 h-16 ml-14 text-center bg-slate-200" ></input></div>
                   <div className="h-16 bg-slate-200 text-center" > <label className="w-1/3 ">CREATEDAT: </label><input type="date"  onChange={(e) => setCreatedAt(e.target.value)} className="w-3/4 h-16 ml-14 text-center bg-slate-200" ></input></div>          
                   <div className="h-16 bg-slate-200 text-center " > <label className="w-1/3 ">DEPARTMENT: </label><select type="text" onChange={(e) => setDepartment(e.target.value)} className="w-3/4 h-16 ml-14 text-center bg-slate-200" >
                    <option>Facilities</option>
                    <option>Networking</option>
                    <option>Accounting</option>
                    <option>Quality</option>
                    <option>Sales</option></select></div>
                   <div className="h-16 bg-slate-200 text-center " > <label className="w-1/3 ">PRIORITY: </label><select type="text"  onChange={(e) => setPriority(e.target.value)} className="w-3/4 h-16 ml-14 text-center bg-slate-200" >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Very High</option>                  
                    </select></div>
                   <div className="h-16 bg-slate-200 text-center " > <label className="w-1/3 ">DESCRIPTION: </label><input type="text"  onChange={(e) => setDescription(e.target.value)} className="w-3/4 h-16 ml-14 text-center bg-slate-200" ></input></div>
                   <div className="h-16 bg-slate-200 text-center " > <label className="w-1/3 ">REPORTEDBY: </label><input type="text"  onChange={(e) => setReportedby(e.target.value)} className="w-3/4 h-16 ml-14 text-center bg-slate-200" ></input></div>
                   <div className="h-16 bg-slate-200 text-center " > <label className="w-1/3 ">TICKETSTATUS: </label><select type="text"  onChange={(e) => setTicketstatus(e.target.value)} className="w-3/4 h-16 ml-14 text-center bg-slate-200" >
                    <option>Draft</option>
                    <option>Assigned</option>
                    <option>In_progress</option>
                    <option>Resolved</option>
                    <option>Closed</option>
                    <option>On_hold</option>
                    <option>Cancelled</option>
                    </select></div>
                   <button type="submit" className="w-full h-12 bg-slate-900 text-white text-xl font-extrabold ">CREATE TICKET</button></div>
                   
                </form>
                
                </div> 
           
        ); 
    }

export default Addnewticket;