import React, { useContext } from "react";
//import "./CSS/Product.css";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Componnents/Breadcrums/Breadcrums";
import ProductDisplay from "../Componnents/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();  
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} /> 
      <ProductDisplay product={product} /> 
    </div>
  );
};

export default Product;
