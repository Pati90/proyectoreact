import NavBar from "./components/NavBar/NavBar";
import  'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>        
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
