// export default function Navbar() {
//     const navbarItems = ["Home","About","Settings","Login","Contact"]
//     return(
//         <>
//         <ul>
//             <li>{navbarItems[0]}</li>
//             <li>{navbarItems[1]}</li>
//             <li>{navbarItems[2]}</li>
//             <li>{navbarItems[3]}</li>
//             <li>{navbarItems[4]}</li>
//         </ul>
//         </>
//     )
// }

import { Link } from "react-router-dom"

export default function Navbar() {
    const navbarItems = ["home","about","settings","login","contact"]
    return(
        <>
        <ul>

           { navbarItems.map((val,id)=>
            <Link to={"/"+val} key={id}>{val}</Link>
            )}
        </ul>
        </>
    )
}