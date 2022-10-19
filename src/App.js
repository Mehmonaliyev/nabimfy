import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carusel from './components/Carusel';
import Menu from "./components/Menu";
import Faollar from './components/Faollar';
import Hududlar from './components/Hududlar';



function App() {
  return (
    <div className="App">
      <Menu />
      <Carusel />
      <Faollar />
      <Hududlar/>
    </div>
  );
}

export default App;
