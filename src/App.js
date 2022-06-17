import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import PNavBar from "./components/PNavBar";
//import { Home } from '@mui/icons-material';

function App() {
  
  return (
    <>
       <BrowserRouter>
   <PNavBar /> 
   <Routes>
   <Route path="/" element={<ItemListContainer />} />
   <Route path="/categoria/:id" element={<ItemListContainer />} />
   <Route path="/item/:id" element={<ItemDetailContainer />} />

  </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
