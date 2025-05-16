import { useState } from "react"

export default function Counter() {
    const [ value , setValue] = useState(0)
    const Increment = ()=>setValue(value+1)
    const Decrement = ()=>setValue(value-1)
    return(
        <>
        <h1></h1>
        <button onClick={Decrement}>Decrement</button>
        <h1>{value}</h1>
        <button onClick={Increment}>Increment</button>
        </>
    )
}   