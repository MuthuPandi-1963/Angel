// import Navbar from "./components/Navbar"
// import ProductsList from "./components/ProductsList"
// import {Routes,Route, Link} from 'react-router-dom'
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Settings from "./Pages/Settings";
// import Login from "./Pages/Login";
// import Contact from "./Pages/Contact";
// function App(){

import { useEffect, useState } from "react";
import Counter from "./useState/Counter";
import Dummy from "./useState/Dummy";

//   //logic 
  
//   return (
//     <>
//     <Navbar/>
//     <ProductsList/>
     
//     <Routes>
//     <Route path="/home" element={<Home/>} />
//     <Route path="/about" element={<About/>} />
//     <Route path="/settings" element={<Settings/>} />
//     <Route path="/login" element={<Login/>} />
//     <Route path="/contact" element={<Contact/>} />

//     </Routes>
    

//     </>
//   ) 
// }
// export default App;

import axios from 'axios'

export default function App() {
  const [data,setData] = useState([])
  const [count,setCount] = useState(0)

  // console.log("hello world 1");
  // setTimeout(()=>{
  //   console.log("hello world 2");
  // },5000)
  
  useEffect(   
    ()=>{
      FetchData()
      console.log("data received");
      
    },[count]
  )

  async function FetchData() {
    try{
      const response = await axios.get("https://dummyjson.com/users")
      // console.log(response.data.users[0].firstName);
      // console.log(response.data.users);
      setData(prev=>{
        const newData = response.data.users
        return newData.filter(val=>val.id <=count)
      })
      console.log("data");
      
    }catch(err){
      console.log("URL is Wrong",err.message);
    }
  }
  
  console.log(data);
  
  // console.log("hello world 3");
  return(
    <>
    {/* <Dummy/>
    <Counter/> */}

    {data.map((val,id)=>(
      <div className="" key={id}>
        <p>{val.firstName}  {val.lastName}  {val.age}</p>
      </div>
    ))}
    <h1>{count}</h1>
    <button onClick={()=>setCount(prev=>prev+1)}>Increase count</button>
    </>
  )
}