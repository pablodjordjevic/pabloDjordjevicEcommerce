import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
function CartWidget() {
  return (
    <Link to="/cart">
      <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2focus:ring-offset-gray-800">
          
          <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </Link>
  )
}

export default CartWidget;
