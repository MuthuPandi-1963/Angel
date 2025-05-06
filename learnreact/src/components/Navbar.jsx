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

export default function Navbar() {
    const navbarItems = ["Home","About","Settings","Login","Contact"]
    return(
        <>
        <ul>

           { navbarItems.map((val,id)=>
            <li key={id}>{val}</li>
            )}
        </ul>
        </>
    )
}