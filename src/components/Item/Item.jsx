const Item = ({title, price, image}) => {
  return (
        <div className="flex justify-center items-center flex-col">
            <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800">
                <a href="/">
                    <img className="w-64 h-64 rounded-t-lg" src={image} alt={title}/>
                </a>
                <div className="p-5">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">${price}</p>
                    <div className="w-100 flex justify-center items-center">
                        <a href="/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Agregar al carrito
                        </a>
                    </div>
                </div>
            </div>  
        </div>
  )
}

export default Item