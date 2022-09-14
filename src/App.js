
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


import './index.scss';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer />
        {/* <ItemCount initial={1} stock={10}/> */}
        <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;
