import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CartProvider from "./context/CartContext";
import Layout from "./components/Layout";

const App = () => (
  <CartProvider>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </CartProvider>
);
export default App;
