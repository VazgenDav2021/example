import React from "react";
import { useParams } from "react-router-dom";

const DetailedProduct = () => {
  const { moyId } = useParams();
  return <div>DetailedProduct {moyId}</div>;
};

export default DetailedProduct;
