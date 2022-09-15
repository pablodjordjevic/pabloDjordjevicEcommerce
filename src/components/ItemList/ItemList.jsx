import Item from "../Item/Item"
import { Link } from "react-router-dom"

const ItemList = ({lista}) => {
  return (
    <div>
      <div className="flex justify-center items-center my-10">
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-3" to='/product/Rams'>Ram</Link>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-3" to='/product/Placa de video'>Placa de video</Link>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-3" to='/product/Gabinetes'>Gabinete</Link>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-3" to='/product/Placa Madre'>Mothers</Link>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-" to='/product/Fuentes'>Fuente</Link>
      </div>
      <div className="grid grid-cols-5 gap-4 ">
          {
              lista.map((product) =>(
                  <Item key={product.id}
                  title={product.title}
                  price={product.price} 
                  image={product.image}
                  id={product.id}
                  />
              ))
          }
      </div>
    </div>
  )
}

export default ItemList