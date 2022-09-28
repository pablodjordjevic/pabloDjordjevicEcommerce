import { useEffect, useState } from "react"
// import data from "../data"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [products, setProducts] = useState ([]);
    const {detalleId} = useParams();
 
    useEffect(() =>{
 
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'products', detalleId);
      getDoc(queryDoc)
        .then(res => setProducts({id: res.id, ...res.data()}))
      // const getProducts = new Promise((resolve) =>{
      //   resolve(data)
      // })
      // getProducts.then(res => setProducts(res.find(datas => datas.id === detalleId)))
    },[detalleId])
  

  return (
      <div>  
        <ItemDetail products={products}/> 
      </div>
  )
}

export default ItemDetailContainer