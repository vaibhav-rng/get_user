import { useState } from 'react';
import './App.css';
import UserCard from './Components/UserCard';
import axios from 'axios'

function App() {

  const [user,setUser]=useState([])
  const[loading,setLoading]=useState(false)
  

  const getUser =()=>
  {
    axios.get("https://reqres.in/api/users?page=1")
    .then( user =>{
      setUser(user.data.data)
      setLoading(false)
    })
    .catch(err=>{
      console.log(err)
    })
  }



  return (
    <>
    <div className="container">
      <div className="navb">
        <div></div>
        <div>
          Amor Fati
        </div>

        <button className="btn" onClick={()=>{setLoading(true);setTimeout(getUser,1000)}}>
          Get users
        </button>
      </div>


      <div style={{ backgroundColor: "rgb(236, 236, 236)"}}>
      {loading?<div className='loading'>Loading.... please wait !!!</div>:null}

      <div className='cardGrid'>
          {user.map((data,index)=><div  key={index} >
            <UserCard data={data}/>
      </div>)}
    </div>
      
      </div>

    </div>

   

    </>
  );
}

export default App;
