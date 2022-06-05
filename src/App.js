import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PNavBar from './components/PNavBar';
import CardWidget1 from './components/CardWidget1';
import ItemListContainer from './components/ItemListContainer';
import Itencount from './components/Itencount';





function App() {
  const onadd = (contador)=>{
 alert(`agregaste ${contador} productos`);
  }
  return (
   <><PNavBar />
   <Itencount inicial={1} max={10} onadd={onadd} />
   <ItemListContainer />
   
  </>);
}

export default App;
