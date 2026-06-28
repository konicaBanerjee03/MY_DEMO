import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Step 1: Get product IDs
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        const ids = data.map((p) => p.id); // e.g. [1, 2, 3, ...]

        // Step 2: Fetch each product detail
        const detailPromises = ids.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
            res.json()
          )
        );

        const productDetails = await Promise.all(detailPromises);

        // Step 3: Save to state
        setProducts(productDetails);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛍 Product List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded-lg shadow">
            <img
              src={product.image}
              alt={product.title}
              className="h-32 object-contain mx-auto mb-2"
            />
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">💲 {product.price}</p>
            <p className="text-xs mt-2 line-clamp-2">{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
