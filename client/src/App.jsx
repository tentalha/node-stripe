import "./App.css";
import axios from "axios";
import { Cart } from "./pages/Cart";
import { Cancel } from "./pages/Cancel";
import Navbar from "./components/Navbar";
import { Checkout } from "./pages/Checkout";
import { Complete } from "./pages/Complete";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const allProducts = await axios.get("http://localhost:8000/products");
        setProducts(allProducts.data.products);
      } catch (error) {
        setError(true);
      }
    };
    getAllProducts();
  }, []);

  const toggleCart = (product) => {
    const index = cart.findIndex((i) => i._id === product._id);
    if (index === -1) {
      setCart((prev) => [...prev, product]);
      return;
    }
    setCart((prev) => prev.filter((i) => i._id !== product._id));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Checkout
              cart={cart}
              error={error}
              products={products}
              toggleCart={toggleCart}
            />
          }
        />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/complete" element={<Complete />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cart} toggleCart={toggleCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
