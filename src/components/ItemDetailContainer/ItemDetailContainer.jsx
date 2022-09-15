import { useEffect, useState } from "react"
import data from "../data"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState ([]);
    const {detalleId} = useParams();

    useEffect(() =>{
      const getProducts = new Promise((resolve) =>{
        resolve(data)
      })
      getProducts.then(res => setProducts(res.find(datas => datas.id === detalleId)))
    },[])
  

  return (
      <div>  
        <ItemDetail products={products}/> 
      </div>
  )
}

export default ItemDetailContainer