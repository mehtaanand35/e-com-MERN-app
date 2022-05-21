import "./App.css";
import NavBar from "./Components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./Components/ProdListening/ProdListening";
import { ProdctDetail } from "./Components/ProductDetail/ProductDetail";
import { MenClothes } from "./Components/MenClothes/MenClothes";
import { WomenClothes } from "./Components/WomenClothes/WomenClothes";
import { Electronics } from "./Components/Electronics/Electronics";
import { Jewellerys } from "./Components/Jewellery/Jewellery";
import { MenProdDetail } from "./Components/MenClothes/MenProdDetail";
import { WomenProdDetail } from "./Components/WomenClothes/WomenProdDetail";
import { Cart } from "./Components/Cart/Cart";
import { Checkout } from "./Components/Checkout/Checkout";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Store } from "./Redux/store";
import { loadUser } from "./Redux/Reducer/AuthReducer";
import { SetAuthToken } from "./Helper/setAuthToken";
import { useEffect } from "react";
import { ElectronicProdDetail } from "./Components/Electronics/ElectronicProdDetail";
import { JeweleryProdDetail } from "./Components/Jewellery/JeweleryProdDetails";
import { Footer } from "./Components/Footer/Footer";

if (localStorage.token) {
  SetAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <div className="App">
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProdctDetail />} />
        <Route path="/MenClothes" element={<MenClothes />} />
        <Route path="/MenClothes/:id" element={<MenProdDetail />} />
        <Route path="/WomenClothes" element={<WomenClothes />} />
        <Route path="/WomenClothes/:id" element={<WomenProdDetail />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Electronics/:id" element={<ElectronicProdDetail />} />
        <Route path="/Jewellerys" element={<Jewellerys />} />
        <Route path="/jewelery/:id" element={<JeweleryProdDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
