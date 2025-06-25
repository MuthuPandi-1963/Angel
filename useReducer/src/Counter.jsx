import React, { useReducer, useRef } from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    case "userChoiceIncrement":
      return state + Number(action.value);
    case "userChoiceDecrement":
      return state - Number(action.value);
    default:
      return state;
  }
}
const initialState = 0;

export default function Counter() {
  const [count, setCountDispatch] = useReducer(countReducer, initialState);const inputRef = useRef();
  return (
    <>
      <h1> count : {count}</h1>
        <input type="text" placeholder="enter a number" ref={inputRef}/>
        <button onClick={()=>{setCountDispatch({type:"userChoiceIncrement" ,value : inputRef.current.value});inputRef.current.value = ""}}>Add</button>
        <button onClick={()=>{setCountDispatch({type:"userChoiceDecrement",value : inputRef.current.value});inputRef.current.value = ""}}>Minus</button>
      <div className="">
        
        <button onClick={()=>setCountDispatch({type:"increment"})}>increment</button>
        <button onClick={()=>setCountDispatch({type:"decrement"})}>decrement</button>
        <button onClick={()=>setCountDispatch({type:"reset"})}>reset</button>
        
      </div>
    </>
  );
}
