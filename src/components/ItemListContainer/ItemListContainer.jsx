import data from "../data";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

const [products, setProducts] = useState ([]);

const {category} = useParams();


  useEffect(() =>{
    getProducts.then((dataList) =>{
      setProducts(dataList)
    })
    .catch(error => console.log(error))

  },[])
  
  const getProducts = new Promise((resolve, reject) =>{
      setTimeout(() =>{
        resolve(data)
      },500)
  })

const productEnviar = category ? products.filter((product) => {console.log(product); return  product.category === category }) : products;


  return (
    <div>
      <ItemList lista={productEnviar}/>
    </div>
  )
}

export default ItemListContainer;