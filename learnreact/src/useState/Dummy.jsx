import { useState } from "react";


let count = 0 

export default function Dummy() {
    
    const [val,setVal] = useState(10)
    let a =10
    let s  = "Hello"
    function HandleClick(){
        console.log("Button clicked");
        a++;
        setVal(val+1)   
        
    }
    console.log(a,val);
    count++;
    console.log("count" +count);
    
    return (
        <>
        <h1>a = {a} (useState not used)</h1>
        <h1>val = {val}  (useState used)</h1>
        <h1>{s}</h1>
        <button onClick={HandleClick}>
            Button
        </button>
        </>
    )
}   