import React, { useState, useEffect } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom';




function TicketStatusTable(){
   const [tickets, setTickets] = useState([])
   const [searchTerm, setSearchTerm] = useState("");

   

   useEffect(() => {
      axios.get('http://localhost:3000/ticketstatustable')
      .then(tickets => setTickets(tickets.data))
      .catch(err => console.log(err))
   }, [])

   const formatDateTime = (dateTimeString) => {
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
      };
      return new Date(dateTimeString).toLocaleString('en-US', options);
  };

   const filteredTickets = tickets.filter((ticket) =>
  Object.values(ticket).some(
    (value) =>
      typeof value === "string" &&
      value.toLowerCase().includes(searchTerm.toLowerCase())
  )
);

   return(

      <div className=" w-full h-full  " >
                 
            <div className=" h-12  text-white justify-center items-center flex font-extrabold "><h1 className="w-30 bg-black px-20 py-2 border-rounded text-white">TICKET LIST</h1> </div>
           <div className="w-full  text-white text-center h-10 justify-center items-center flex "> <Link to ='/Login' className="text-center py-2 px-2 w-20 bg-slate-800 border-rounded">LogOut</Link></div>
        
               
            <div className="w-full h-12  text-black justify-center items-center flex font-extrabold "><input type="text" className="form-control w-1/2 h-3/4 text-center" placeholder="Search Here...." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/></div>
        
         <div className=" w-full h-full  text-white justify-center items-center flex ">
         <table className="table border-solid border-white	border-4	">
            <thead>
               <tr className="h-15 w-full bg-slate-900 ">
               <th className= "border-solid border-white	border-2 p-5">TICKET_ID</th>
               <th className= "border-solid border-white	border-2 p-5">CREATEDAT</th>
               <th className= "border-solid border-white	border-2 p-5">DEPARTMENT</th>
               <th className= "border-solid border-white	border-2  p-5">PRIORITY</th>
               <th className= "border-solid border-white	border-2 p-5 ">DESCRIPTION</th>
               <th className= "border-solid border-white	border-2 p-5 ">REPORTEDBY</th>
               <th className= "border-solid border-white	border-2 p-5 ">TICKETSTATUS</th>
               
               </tr>
            </thead>
            <tbody>
               {
                  filteredTickets.map((ticket) =>{
                    return <tr key={ticket.ticket_id} className="bg-slate-600 text-center">
                     <td className= "border-solid border-white	border-2  p-3">{ticket.ticket_id}</td>
                     <td className= "border-solid border-white	border-2 p-3">{formatDateTime(ticket.createdAt)}</td>
                     <td className= "border-solid border-white	border-2 p-3">{ticket.department}</td>
                     <td className= "border-solid border-white	border-2 p-3">{ticket.priority}</td>
                     <td className= "border-solid border-white	border-2 p-3">{ticket.description}</td>
                     <td className= "border-solid border-white	border-2 p-3">{ticket.reportedby}</td>
                     <td className= "border-solid border-white	border-2 p-3">{ticket.ticketstatus}</td>
                    
                  </tr>
                  })
               }
            </tbody>
         </table>
        
         </div>

         
      </div>
   )
}

export default TicketStatusTable;
