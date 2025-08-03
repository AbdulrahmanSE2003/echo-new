import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="max-w-sm w-full rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 mx-auto flex flex-col">
      <div className="h-48 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={product.image || "https://placeholder.pics/svg/300x200"}
          alt={product.name}
        />
      </div>

      <div className="p-4 flex flex-col justify-between h-[170px]">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-gray-600 text-sm mt-2 line-clamp-3 ml-2">
            {product.description || "وصف المنتج غير متوفر"}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-green-600">
            {product.price}
          </span>
          <Link to="/ProductDetails" state={{ product }}>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
