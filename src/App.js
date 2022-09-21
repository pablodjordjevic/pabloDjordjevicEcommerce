
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './index.scss';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/product' element={<ItemListContainer/>}/>
          <Route path='/product/:category' element={<ItemListContainer/>}/>
          {/* <Route path='product/:category' element={<ItemList/>}/> */}
          <Route path='/cart' element={<CartWidget/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
