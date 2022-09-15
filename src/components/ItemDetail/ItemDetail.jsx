
const ItemDetail = ({products}) => {

  return (
    <div className="grid grid-cols-2 gap-4 justify-center mt-8">
        <div className="flex justify-center items-center">
            <img width={500} src={products.image} alt={products.title} />
        </div>
        <div className="flex flex-col justify-center items-center">
            <h4 className="text-7xl">{products.title}</h4>
            <p>${products.price}</p>
            <p>{products.detail}</p>
        </div>
    </div>
  )
}

export default ItemDetail;