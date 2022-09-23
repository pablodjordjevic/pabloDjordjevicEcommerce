import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
//Componentes
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './CartContext/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/product' element={<ItemListContainer/>}/>
            <Route path='/product/:category' element={<ItemListContainer/>}/>
            {/* <Route path='product/:category' element={<ItemList/>}/> */}
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
