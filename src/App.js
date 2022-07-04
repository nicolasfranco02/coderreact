import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import MyProvider from "./components/cartcontex/CartContex";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import PNavBar from "./components/PNavBar";
import { initializeApp } from "firebase/app";
import CheckOut from "./components/CheckOut";




function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCIQo0YEZfW9OOgJbB_Y9hVU-WKAUV1XUs",
    authDomain: "ecomer-franco-gabriel.firebaseapp.com",
    projectId: "ecomer-franco-gabriel",
    storageBucket: "ecomer-franco-gabriel.appspot.com",
    messagingSenderId: "132664936400",
    appId: "1:132664936400:web:794b12cfc2b9c712499bd5"
  };
  
  
initializeApp(firebaseConfig);
  
  return (
    <>
    <div><MyProvider>
   <BrowserRouter>
   
   <PNavBar />
   <Routes>
   <Route path="/" element={<ItemListContainer />} />
   <Route path="/categoria/:id" element={<ItemListContainer />} />
   <Route path="/item/:id" element={<ItemDetailContainer />} />
   <Route path="/Cart" element={<Cart />}/>
   <Route path="/CheckOut" element={<CheckOut />} />
   </Routes>
  
</BrowserRouter>
</MyProvider>
</div>
    </>
  );
}

export default App;
