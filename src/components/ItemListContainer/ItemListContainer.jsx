// import data from "../data";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs, query , where } from 'firebase/firestore'

const ItemListContainer = () => {

const [products, setProducts] = useState ([]);

const {category} = useParams();


  useEffect(() =>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
    
    if(category){
      const queryFilter = query(queryCollection, where('category' , '==', category))
      getDocs(queryFilter)
        .then(res => setProducts(res.docs.map(product => ( {id: product.id, ...product.data() } ))))
      }else{
        getDocs(queryCollection)
          .then(res => setProducts(res.docs.map(product => ( {id: product.id, ...product.data() } ))))
    }  
     

    // getProducts.then((dataList) =>{
    //   setProducts(dataList)
    // })
    // .catch(error => console.log(error))

  },[category])
  
const productEnviar = category ? products.filter((product) => { return  product.category === category }) : products;


  return (
    <div>
      <ItemList lista={productEnviar}/>
    </div>
  )
}

export default ItemListContainer;