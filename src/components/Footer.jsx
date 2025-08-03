import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer px-6 md:px-10 lg:px-20 py-10 bg-white">
      <h5 className="text-2xl md:text-3xl ml-2 md:ml-4 my-3 font-semibold accent-clr">
        Echo New.
      </h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* First Column */}
        <div className="p-2 md:p-4 flex flex-col justify-center items-start gap-6">
          <p className="text-gray-600 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ullam
            ratione repellat eaque natus soluta, vero saepe rem quasi ipsam!
          </p>
          <ul className="footer-social flex flex-wrap gap-3 accent-clr">
            <a href="#">
              <li className="footer-social-icon p-2.5 w-10 h-10 rounded-full transition duration-300 flex justify-center items-center bg-gray-200 hover:bg-gray-300">
                <i className="fab fa-facebook-f fa-fw text-[1rem]"></i>
              </li>
            </a>
            <a href="#">
              <li className="footer-social-icon p-2.5 w-10 h-10 rounded-full transition duration-300 flex justify-center items-center bg-gray-200 hover:bg-gray-300">
                <i className="fa-brands fa-whatsapp fa-fw text-[1rem]"></i>
              </li>
            </a>
            <a href="#">
              <li className="footer-social-icon p-2.5 w-10 h-10 rounded-full transition duration-300 flex justify-center items-center bg-gray-200 hover:bg-gray-300">
                <i className="fa-solid fa-location-dot fa-fw text-[1rem]"></i>
              </li>
            </a>
            <a href="#">
              <li className="footer-social-icon p-2.5 w-10 h-10 rounded-full transition duration-300 flex justify-center items-center bg-gray-200 hover:bg-gray-300">
                <i className="fa-solid fa-envelope fa-fw text-[1rem]"></i>
              </li>
            </a>
          </ul>
        </div>

        {/* Second Column */}
        <div className="p-2 md:p-4 px-6">
          <ul className="flex flex-col gap-3 font-medium text-gray-700">
            <Link
              className="hover:text-gray-400 transition duration-300"
              to="/about"
            >
              <li>About Us</li>
            </Link>
            <Link
              className="hover:text-gray-400 transition duration-300"
              to="/contact"
            >
              <li>Contact Us</li>
            </Link>
            <Link
              className="hover:text-gray-400 transition duration-300"
              to="/products"
            >
              <li>Our Products</li>
            </Link>
          </ul>
        </div>

        {/* Third Column */}
        <div className="p-2 md:p-4 px-6">
          <ul className="flex flex-col gap-3 font-medium text-gray-700">
            <Link
              className="hover:text-gray-400 transition duration-300"
              to="/about"
            >
              <li>Warranty</li>
            </Link>
            <Link
              className="hover:text-gray-400 transition duration-300"
              to="/contact"
            >
              <li>Return Policy</li>
            </Link>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="p-2 md:p-4 px-6">
          <ul className="flex flex-col gap-3 font-medium text-gray-700">
            <Link
              className="hover:text-gray-400 transition duration-300"
              to="/about"
            >
              <li>Founder</li>
            </Link>
            <Link
              className="hover:text-gray-400 transition duration-300"
              to="/contact"
            >
              <li>Reviews</li>
            </Link>
            <Link
              className="hover:text-gray-400 transition duration-300"
              to="/contact"
            >
              <li>Gallery</li>
            </Link>
          </ul>
        </div>
      </div>

      <hr className="border border-gray-300 rounded-full my-6 mx-2 md:mx-10" />
      <p className="ml-2 md:ml-5 text-center md:text-left text-sm text-gray-500 mt-4">
        ©2025 All Rights Reserved. — Designed by{" "}
        <a
          href="#"
          className="font-medium text-gray-600 hover:text-gray-900 transition duration-300"
        >
          The Debuggers
        </a>
      </p>
    </footer>

    // <footer className="footer px-6 md:px-10 lg:px-20 py-10 bg-black text-gray-300">
    //   <h5 className="text-2xl md:text-3xl ml-2 md:ml-4 my-3 font-semibold accent-clr">
    //     Echo New.
    //   </h5>

    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    //     {/* First Column */}
    //     <div className="p-2 md:p-4 flex flex-col justify-center items-start gap-6">
    //       <p className="text-gray-400 text-sm md:text-base">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ullam
    //         ratione repellat eaque natus soluta, vero saepe rem quasi ipsam!
    //       </p>
    //       <ul className="footer-social flex flex-wrap gap-3">
    //         <a href="#">
    //           <li className="footer-social-icon p-2.5 w-10 h-10 rounded-full bg-green-700 hover:bg-green-800 transition duration-300 flex justify-center items-center">
    //             <i className="fab fa-facebook-f fa-fw text-white text-[1rem]"></i>
    //           </li>
    //         </a>
    //         <a href="#">
    //           <li className="footer-social-icon p-2.5 w-10 h-10 rounded-full bg-green-700 hover:bg-green-800 transition duration-300 flex justify-center items-center">
    //             <i className="fa-brands fa-whatsapp fa-fw text-white text-[1rem]"></i>
    //           </li>
    //         </a>
    //         <a href="#">
    //           <li className="footer-social-icon p-2.5 w-10 h-10 rounded-full bg-green-700 hover:bg-green-800 transition duration-300 flex justify-center items-center">
    //             <i className="fa-solid fa-location-dot fa-fw text-white text-[1rem]"></i>
    //           </li>
    //         </a>
    //         <a href="#">
    //           <li className="footer-social-icon p-2.5 w-10 h-10 rounded-full bg-green-700 hover:bg-green-800 transition duration-300 flex justify-center items-center">
    //             <i className="fa-solid fa-envelope fa-fw text-white text-[1rem]"></i>
    //           </li>
    //         </a>
    //       </ul>
    //     </div>

    //     {/* Second Column */}
    //     <div className="p-2 md:p-4 px-6">
    //       <ul className="flex flex-col gap-3 font-medium text-gray-400">
    //         <Link
    //           className="hover:text-white transition duration-300"
    //           to="/about"
    //         >
    //           <li>About Us</li>
    //         </Link>
    //         <Link
    //           className="hover:text-white transition duration-300"
    //           to="/contact"
    //         >
    //           <li>Contact Us</li>
    //         </Link>
    //         <Link
    //           className="hover:text-white transition duration-300"
    //           to="/products"
    //         >
    //           <li>Our Products</li>
    //         </Link>
    //       </ul>
    //     </div>

    //     {/* Third Column */}
    //     <div className="p-2 md:p-4 px-6">
    //       <ul className="flex flex-col gap-3 font-medium text-gray-400">
    //         <Link
    //           className="hover:text-white transition duration-300"
    //           to="/about"
    //         >
    //           <li>Warranty</li>
    //         </Link>
    //         <Link
    //           className="hover:text-white transition duration-300"
    //           to="/contact"
    //         >
    //           <li>Return Policy</li>
    //         </Link>
    //       </ul>
    //     </div>

    //     {/* Fourth Column */}
    //     <div className="p-2 md:p-4 px-6">
    //       <ul className="flex flex-col gap-3 font-medium text-gray-400">
    //         <Link
    //           className="hover:text-white transition duration-300"
    //           to="/about"
    //         >
    //           <li>Founder</li>
    //         </Link>
    //         <Link
    //           className="hover:text-white transition duration-300"
    //           to="/contact"
    //         >
    //           <li>Reviews</li>
    //         </Link>
    //         <Link
    //           className="hover:text-white transition duration-300"
    //           to="/contact"
    //         >
    //           <li>Gallery</li>
    //         </Link>
    //       </ul>
    //     </div>
    //   </div>

    //   <hr className="border border-gray-600 rounded-full my-6 mx-2 md:mx-10" />
    //   <p className="ml-2 md:ml-5 text-center md:text-left text-sm text-gray-500 mt-4">
    //     ©2025 All Rights Reserved. — Designed by{" "}
    //     <a
    //       href="#"
    //       className="font-medium text-gray-400 hover:text-white transition duration-300"
    //     >
    //       The Debuggers
    //     </a>
    //   </p>
    // </footer>
  );
}

export default Footer;
