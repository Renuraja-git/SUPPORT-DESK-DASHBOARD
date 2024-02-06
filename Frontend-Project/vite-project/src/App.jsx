import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'

import Login from "./login";
import Support from './Support';
import Home from './Home';
import Register from './Register';
import Addnewticket from './Addnewticket';
import TicketStatusTable from './TicketStatusTable';




 function App(){

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
      setDarkMode(prevMode => !prevMode);
  };
    


  return(
    
    <div className= {` ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="text-center">
                <button className={`bg-blue-500  text-white px-4 py-2 rounded ${darkMode ? 'bg-yellow-500' : 'bg-blue-500'}`} onClick={toggleDarkMode}>
                    {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
                
    
                <div className="h-[100vh] w-full flex justify-center items-center ">
<Routes>
      <Route path= 'login' element={<Login />} />
      <Route path= 'register' element={<Register />} />
      <Route path= 'support' element={<Support />} />
      <Route path= 'addnewticket' element={<Addnewticket />} />
      <Route path= 'ticketstatustable' element={<TicketStatusTable />} />
      <Route path= 'home' element={<Home />} />

</Routes>
</div>
</div>
</div>     
  );
  }
export default App;
