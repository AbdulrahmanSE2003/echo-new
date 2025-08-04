import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "../components/Loader";

function Products() {
  const categories = ["Laptop", "Computer", "Accessories", "Others"];
  const [isLoading, setIsLoading] = useState(true);

  const [Products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("Laptop");
  const [toSearch, setToSearch] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbysyscSpN03gaRpDhWOuJRlWjvIPGDq3x9rVWYQrPuGA1jZjLFs-2Hiygse3gn7cpui/exec",
          { signal: controller.signal }
        );

        const data = await res.json();
        setProducts(data);
        return () => {
          controller.abort();
        };
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  function changeCategory(cat) {
    setToSearch("");
    setFilteredProducts([]);
    setFilteredCategory(cat);
  }

  function onSearch(e) {
    setToSearch(e);
    if (e.length <= 1) return;
    setFilteredProducts(
      Products.filter(
        (product) =>
          product.name.toLowerCase().includes(e.toLowerCase()) &&
          product.category === filteredCategory
      )
    );
  }

  return (
    <main className="min-h-screen bg-main ">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-4 max-w-6xl mx-auto pb-10">
          <h1 className="text-2xl font-bold mb-4">Products:</h1>

          <div className="justify-center lg:justify-between items-center mb-6 py-2 grid lg:grid-cols-2 grid-cols-1 gap-y-5 ">
            <div className="flex flex-wrap ml-5 justify-start items-center gap-4">
              <p className="font-semibold text-xl text-gray-600">Sort:</p>
              {categories.map((cat) => (
                <button
                  key={cat}
                  value={cat}
                  onClick={() => changeCategory(cat)}
                  className={`px-4 py-1.5 transition delay-100 ease-in-out cursor-pointer rounded-full text-gray-600 ${
                    filteredCategory === cat
                      ? "bg-green-700 text-white"
                      : "bg-white border border-gray-400 hover:border-green-700 transition duration-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="searchProduct flex justify-center md:justify-end relative">
              <input
                type="text"
                name="searchProduct"
                id="searchProduct"
                value={toSearch}
                placeholder="Search products..."
                onChange={(e) => onSearch(e.target.value)}
                className="search-produc-input w-full max-w-md bg-white border border-gray-300 focus:border-green-700 focus:ring-1 focus:ring-green-600 outline-none px-4 py-2 rounded-full shadow-sm transition duration-300 "
              />
              <button
                onClick={() => setToSearch("")}
                className="text-gray-300 hover:text-green-800 transition duration-300"
              >
                &times;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8">
            {toSearch.length >= 2 ? (
              filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id || product.title}
                    product={product}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-16 text-gray-500">
                  <p className="text-xl mb-2">No matching products found</p>
                  <p className="text-sm">Try a different keyword.</p>
                </div>
              )
            ) : Products.filter(
                (product) => product.category === filteredCategory
              ).length > 0 ? (
              Products.filter(
                (product) => product.category === filteredCategory
              ).map((product) => (
                <ProductCard
                  key={product.id || product.title}
                  product={product}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16 text-gray-500">
                <p className="text-xl mb-2">Oops! No products here</p>
                <p className="text-sm">
                  Try choosing another category or check back later.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Products;
