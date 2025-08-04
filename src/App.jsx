import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

// استيراد الصفحات
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductsDetails";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  const hideLayoutFor = ["/contact", "/login"];

  const shouldHideLayout = hideLayoutFor.includes(location.pathname);
  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
      </Routes>
      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default App;
