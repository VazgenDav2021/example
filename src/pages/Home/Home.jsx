import React, { useEffect, useState } from "react";
import "./index.css";

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

  return (
    <div className="wrapper">
      {products.map((product, idx) => {
        const { title, images, price, id } = product;

        const realText =
          title.length > 10 ? `${title.slice(0, 10)} ...` : title;

        return (
          <a href={`/product/${id}`} className="product" key={idx}>
            <img className="product__img" src={images[0]} alt={title} />
            <p className="product__title">{realText}</p>
            <p className="product__price">{price}</p>
            <button className="btn">Buy Now</button>
          </a>
        );
      })}
    </div>
  );
}

export default Home;
