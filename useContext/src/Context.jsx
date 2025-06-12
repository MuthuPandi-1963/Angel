import { createContext, useState } from "react";

export const  NameContext = createContext()

function NCP({children}){
    const[name,setName] = useState("guest")
    return (
        <NameContext.Provider value={{name,setName}}>
            {children}
        </NameContext.Provider>
    )
}
export default NCP;