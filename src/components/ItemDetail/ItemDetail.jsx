import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StarIcon } from '@heroicons/react/20/solid'

const ItemDetail = ({products}) => {
  
  const [carrito, setCarrito] = useState(false);
  
  const onAdd = () => {
    setCarrito(true);
  }

  return (
    <div>
      {/*<div className="grid grid-cols-2 gap-4 justify-center mt-8 bg-white">
        <div className="flex justify-center items-center">
            <img width={500} src={products.image} alt={products.title} />
        </div>
        <div className="flex flex-col justify-center items-center">
            <h4 className="text-7xl">{products.title}</h4>
            <p className="my-5">{products.detail}</p>
            <p>${products.price}</p>
            <div>
            {
              carrito ? <div><Link to='/cart'>Terminar compra</Link></div> : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            }
        </div>
        </div> */}
    
        <div className="bg-white m-24 rounded-xl">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            
            <li className="text-sm">
              <a href={products.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {products.title}
              </a>
            </li>
          </ol>
        </nav>

        {/* Imagen */}
        <div className="flex justify-center items-center">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img 
              width={250} height={250}
              src={products.image}
              alt={products.title}
              className=" object-cover object-center"
            />
          </div>
        </div>

        {/* Producto info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{products.title}</h1>
          </div>

          {/* Opciones */}
          <div className="flex justify-center items-center flex-col mt-4 lg:row-span-3 lg:mt-0">

            <p className="text-3xl tracking-tight text-gray-900">${products.price}</p>
            <div>
              {
                carrito ? <div className="flex justify-center items-center mt-12"><Link to='/cart' className="rounded-lg bg-cyan-500 hover:bg-cyan-600 p-2">Terminar compra</Link></div> : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
              }
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{products.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default ItemDetail;