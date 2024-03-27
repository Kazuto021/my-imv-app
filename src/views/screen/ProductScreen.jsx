import React from "react";
// import Inp from "./Inp";
// import String from "../util/InpUtil";
// import "./styles/inp.scss"
import "../components/styles/product.scss";
import "./style/ProductScreen.scss"
// import product from "../util/ProductUtil";
// import CustomButton from "./CustomButton";
// import Buttonprop from "../util/Buttonprop";
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
