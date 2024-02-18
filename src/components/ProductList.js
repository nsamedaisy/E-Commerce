import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Products</h1>
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 rounded p-4 my-2"
        >
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
