import Item from "../Item/Item"
const ItemList = ({lista}) => {
  return (
    <div className="grid grid-cols-5 gap-4 ">
        {
            lista.map((product) =>(
                <Item key={product.id}
                title={product.title}
                price={product.price} 
                image={product.image}
                />
            ))
        }
    </div>
  )
}

export default ItemList