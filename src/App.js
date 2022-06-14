import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PNavBar from "./components/PNavBar";
import CardWidget1 from "./components/CardWidget1";
import ItemListContainer from "./components/ItemListContainer";
import Itencount from "./components/Itencount";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Home } from "@mui/icons-material";
//import { Home } from '@mui/icons-material';

function App() {
  const onAdd = (contador) => {
    alert(`agregaste ${contador} productos`);
  };
  return (
    <>
      {/* <BrowserRouter>
   <PNavBar />
   <ItemListContainer />
   <Routes>
   <Route path="/" element={<inicio />} />
   <Route path="/home" element={<inicio />} />
   <Route path="/productos" element={< productos/>} />
   <Route path="/serchProductos" element={< respuesta/>} />
  </Routes>
</BrowserRouter>*/}

      <PNavBar />
      <ItemListContainer />
    </>
  );
}

export default App;
