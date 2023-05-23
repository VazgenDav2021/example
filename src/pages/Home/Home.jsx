import React, { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    await data.json().then((data) => {
      // Variant 2
      setProducts(() => [...data.products]);
    });
    // Variant 1
    // const res = await data.json();
    // setProducts(() => [...res.products]);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log({ products });

  return <div>Home</div>;
}

export default Home;
