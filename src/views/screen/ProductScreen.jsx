import React from "react";
import "../components/styles/product.scss";
import "./style/ProductScreen.scss"

import Product from "../components/Product";
import MenuBar from "../components/MenuBar";

const ProductScreen = () => {
  return (
    <div className='product-wrapper'>
      <MenuBar/>
      <Product/>
    </div>
    
  );
};

export default ProductScreen;
