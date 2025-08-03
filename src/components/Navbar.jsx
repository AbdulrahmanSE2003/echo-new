// components/Navbar.jsx

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#2a614c] text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wide">
          موقع اللابتوبات
        </Link>

        <ul className="flex space-x-4 rtl:space-x-reverse">
          <li>
            <Link to="/" className="hover:text-[#e49a5f] duration-200">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#e49a5f] duration-200">
              نبذة عنا
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-[#e49a5f] duration-200">
              المنتجات
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#e49a5f] duration-200">
              تواصل معنا
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
