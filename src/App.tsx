import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog/BlogPost";
import Checkout from "./pages/checkout";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
import Products from "./pages/products";
import ProductDetails from "./pages/products/ProductDetails";
import ProductCategory from "./pages/products/categories/ProductCategory";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

import { RootLayout } from "./components/layouts/RootLayout";
import { BlogLayout } from "./components/layouts/BlogLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="blog" element={<BlogLayout />}>
          <Route index element={<Blog />} />
          <Route path=":slug" element={<BlogPost />} />
        </Route>

        <Route path="checkout">
          <Route index element={<Checkout />} />
          <Route path="success" element={<CheckoutSuccess />} />
        </Route>

        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":slug" element={<ProductDetails />} />
          <Route path="categories" element={<NotFound />} />
          <Route path="categories/:slug" element={<ProductCategory />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
