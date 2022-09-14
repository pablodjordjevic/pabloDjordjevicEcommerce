import data from "../data";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = () => {

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
      <ItemList lista={products}/>
    </div>
  )
}

export default ItemListContainer;