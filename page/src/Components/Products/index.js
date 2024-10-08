import React, { useEffect, useState } from "react";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState(0);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return <div>
    
  </div>;
};

export default Products;
