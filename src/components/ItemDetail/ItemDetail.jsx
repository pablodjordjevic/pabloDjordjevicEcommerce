
const ItemDetail = ({details}) => {

  return (
    <div className="grid grid-cols-2 gap-4 justify-center mt-8">
        <div className="flex justify-center items-center">
            <img width={500} src={details.image} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
            <h4 className="text-7xl">{details.title}</h4>
            <p>${details.price}</p>
            <p>{details.detail}</p>
        </div>
    </div>
  )
}

export default ItemDetail;