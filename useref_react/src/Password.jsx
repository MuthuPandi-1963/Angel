import { useRef } from 'react'

export default function Password() {
    const  pw = "fbdfuv73ye892*&#*("
    const inputRef = useRef()
    const handleCopy = ()=>{
        navigator.clipboard.writeText(inputRef.current.value)
        alert("copied successfully")
    }
    const generatePassword = ()=>{
        let password = ""
        for(let i =0;i<6;i++){
            password+=Math.floor(Math.random()*10)
        }
        inputRef.current.value = password
        console.log(password);  
        
    }
  return (
    <div>
        <input type="text" name="" id="" value={pw} readOnly  ref={inputRef}   />
        <button onClick={handleCopy}>Copy</button>
        <button onClick={generatePassword}>generate new </button>
    </div>
  )
}
