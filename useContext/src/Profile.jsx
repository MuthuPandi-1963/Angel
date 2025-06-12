import React, { useContext, useState } from 'react'
import { NameContext } from './Context';

export default function Profile() {
    const {setName} = useContext(NameContext)
    const [val,setVal] = useState("")
    
    const handleChange = (e)=>{
        console.log(e.target.value);
        setVal(e.target.value)
        
    }
    const handleSubmit = ()=>{
        console.log(val);
        setName(val)
        
        
    }
  return (
    <div>
        <label htmlFor="">change Username</label>
        <input type="text" name="" id="" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
