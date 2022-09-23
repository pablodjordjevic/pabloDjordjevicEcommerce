import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import React from 'react'
import { useCartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

const ItemCart = () => {

    const [open, setOpen] = useState(true)
    const {removeProduct,cart,precioTotal, clearCart} = useCartContext();

  return (
    <div>
        {/* <p>Nombre: {producto.title}</p>
        <p>Cantidad: {producto.cantidad}</p>
        <p>Precio unidad: {producto.price}</p>
        <p>Subtotal: ${producto.cantidad * producto.price}</p>
        <button onClick={() => removeProduct(producto.id)}>Remover producto</button> */}

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Productos</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          {/* <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button> */}
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <div role="list" className="-my-6 divide-y divide-gray-200">
                            {
                            cart.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.image}
                                    alt={product.image}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        {product.title}
                                      </h3>
                                      <p className="ml-4">{product.cantidad} x ${product.cantidad * product.price}</p>
                                    </div>
                                    
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">


                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      onClick={()=>removeProduct(product.id)}>
                                        Remover producto
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${precioTotal()}</p>
                        
                      </div>
                      <div className="mt-6">
                      </div>
                      <div className="mt-6 flex flex-col justify-center text-center text-sm text-gray-500">
                        <p>
                          <Link
                          to='/product'
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continuar comprando
                            <span aria-hidden="true"> &rarr;</span>
                          </Link>

                          
                        </p>
                        <button onClick={()=> clearCart()}>
                            Borrar productos
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

    </div>
  )
}

export default ItemCart