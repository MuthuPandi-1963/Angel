// import Navbar from "./components/Navbar"
// import ProductsList from "./components/ProductsList"
// import {Routes,Route, Link} from 'react-router-dom'
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Settings from "./Pages/Settings";
// import Login from "./Pages/Login";
// import Contact from "./Pages/Contact";
// function App(){

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

  console.log("hello world 1");
  setTimeout(()=>{
    console.log("hello world 2");
  },5000)
  
  

  async function FetchData() {
    try{
      const response = await axios.get("https://dummyjson.com/users")
      // console.log(response.data.users[0].firstName);
      console.log(response.data.users);
    }catch(err){
      console.log("URL is Wrong",err.message);
    }
     
  }
  FetchData()
  console.log("hello world 3");
  return(
    <>
    <Dummy/>
    <Counter/>
    </>
  )
}