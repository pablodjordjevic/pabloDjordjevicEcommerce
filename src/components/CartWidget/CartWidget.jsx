import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function CartWidget() {
  return (
    <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2focus:ring-offset-gray-800">
        <span className="sr-only">View notifications</span>
        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}

export default CartWidget