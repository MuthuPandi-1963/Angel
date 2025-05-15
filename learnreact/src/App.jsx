import Navbar from "./components/Navbar"
import ProductsList from "./components/ProductsList"
import {Routes,Route, Link} from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Settings from "./Pages/Settings";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
function App(){

  //logic 
  
  return (
    <>
    <Navbar/>
    <ProductsList/>
     
    <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/settings" element={<Settings/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/contact" element={<Contact/>} />

    </Routes>
    

    </>
  ) 
}
export default App;