import React, { useContext, useState } from 'react'
import {NameContext} from './Context'
export default function Navbar() {
    const data = useContext(NameContext)
    console.log(data);
    
  return (
    <div>
        <h1>Navbar</h1> 
        <h1>{data.name}</h1>
        </div>
  )
}
