
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

     const [count, setCount] = useState(initial);

     

     const handleAdd = () => {
        if(count<stock){
            setCount(count+1)
        }
     }

     const handleRemove = () => {
        if(count>1){
            setCount(count-1)
        }
     }

 return(
    <div className='flex justify-center items-center mt-12'>
        <div className="flex flex-col">
            <div className='flex justify-center items-center'>
                <button className="text-base" onClick={handleRemove}>
                    <MinusCircleIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className='mx-5 text-base'>
                    <span>{count}</span>
                </div>
                <button className='text-base' onClick={handleAdd}>
                    <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className='mt-5'>
                <button className='rounded-lg bg-cyan-500 hover:bg-cyan-600 p-2' disabled={stock<=0} onClick={()=>onAdd(count)}>
                    Agregar a carrito
                </button>
               
            </div>
        </div>
    </div>
 )
}


export default ItemCount;

