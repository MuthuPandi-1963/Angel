import products from "./products.data"
export default function ProductsList() {
    console.log(products);
    
    return(
        <>
        {
            products.map((value,index)=>(
                <tr key={index}>
                    <td>{value.ProductID}</td>
                    <td>{value.ProductName}</td>
                    <td>{value.Category}</td>
                    <td>{value.Price}</td>
                    <td>{value.Stock}</td>
                    <td>{value.LaunchDate}</td>
                </tr>
            ))
        }
        </>
    )
}