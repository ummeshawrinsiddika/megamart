import Layout from "./components/layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/Productdetails";
import Login from "./pages/login";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/cart";
import Profile from "./pages/Profilepage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="category/:slug" element={<CategoryPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
