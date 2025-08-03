import { useLocation } from "react-router-dom";

export default function ProductDetails() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div className="p-4 text-red-600">لا يوجد بيانات للمنتج</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <p className="mb-2">{product.description}</p>
      <p className="text-green-600 font-semibold">Price: ${product.price}</p>
    </div>
  );
}
