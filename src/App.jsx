import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
   const [users,setUsers]=useState([]);

   const fecthapi = async function(){
    const response= await fetch("https://jsonplaceholder.typicode.com/users")
     const data = await response.json()
     setUsers(data);
   }
   fecthapi();
  return(

    <div className='bg-red-500 grid border border-5  px-10 py-6 border-black justify-center items-center gap-3'>
     {users.map((item)=>{
      return (
         <div>
        {item.name}
        <p>
          {item.email}
        </p>
     
     </div>
     
     
     )
     
     })}
     <h1> jhvkdjsafhdjlvsafvlgvlsdajf</h1>
    </div>
    
  )
}
export default App

