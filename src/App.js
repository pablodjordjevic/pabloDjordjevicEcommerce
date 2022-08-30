import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

import './index.scss';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer title="Vieron ese rempalago?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum enim ut molestie tempor. Curabitur aliquam libero ligula, ac finibus est fermentum ut. Donec sagittis a risus ut vestibulum." boton="Ver productos"/>
      </header>
    </div>
  );
}

export default App;
