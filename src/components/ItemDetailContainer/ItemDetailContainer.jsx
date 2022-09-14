import { useEffect, useState } from "react"
import data from "../data"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState ([]);

    useEffect(() =>{
      getProducts.then((dataList) =>{
        setProducts(dataList)
      })
      .catch(error => console.log(error))
    },)
  
    const getProducts = new Promise((resolve, reject) =>{
        setTimeout(() =>{
          resolve(data)
        },2000)
    })

  return (
      <div>  
        {
            products.length > 0 && <ItemDetail details={products[0]}/> 
        }
    </div>
  )
}

export default ItemDetailContainer