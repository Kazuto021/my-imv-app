import React from "react";
import Inp from "./Inp";
import String from "../util/InpUtil";
// import "./styles/inp.scss"
import "./styles/product.scss";
// import product from "../util/ProductUtil";
import CustomButton from "./CustomButton";

import Property from "../util/Buttonprop";
// import MenuBar from "./MenuBar";

const Product = () => {
  return (
    <div className="admin">
      <form className="forum" action="post">
        <div className="admin-first-child">
          <p>&larr;</p><br />
          <h2>Add product</h2>
        </div>
        <div className="common-styling">
          <Inp
            placeholder={String.placeholder_product}
            icon={String.iconUsers}
            type={String.typeText}
          />
          <div className="common-styling">
            <legend>Description:</legend>
            <textarea name="description" />
          </div>
        </div>
        <div className="common-styling">
          <Inp
            placeholder={String.placeholder_media}
            icon={String.iconUsers}
            type={String.typefile}
          />
        </div>
        <div className="common-styling price">
          <div className="price-section">
            <h2>Pricing</h2>
          </div>
          <div className="price-section">
            <Inp
              placeholder="Price"
              icon={String.iconUsers}
              type={String.typeNumber}
            />
          </div>
          <div className="price-section">
            <Inp
              placeholder="Compare-at price"
              icon={String.iconUsers}
              type={String.typeNumber}
            />
            <span><input type="checkbox" value="" />Charge Tax on this product</span>


          </div>
          <div className="price-section">
            <Inp
              placeholder="Cost per item"
              icon={String.iconUsers}
              type={String.typeNumber}
            />
          </div>
          <div className="price-section">
            <Inp
              placeholder="Profit"
              icon={String.iconUsers}
              type={String.typeNumber}
            />
          </div>
          <div className="price-section">
            <Inp
              placeholder="Margin"
              icon={String.iconUsers}
              type={String.typeNumber}
            />
          </div>
          <div className="price-section">
            <Inp
              placeholder="Quantity"
              icon={String.iconUsers}
              type={String.typeNumber}
            />
          </div>
          <div className="price-section">
            <Inp
              placeholder="Unit"
              icon={String.iconUsers}
              type={String.typeText}
            />
          </div>
        </div>
        <CustomButton type={Property.type} value={Property.addProductContent}/>
      </form>
    </div>
  );
};


{/* <h2>Add Product</h2>
      <form>
        <div>
          <Inp
            placeholder={String.placeholder_product}
            icon={String.iconUsers}
            type={String.typeText}
          />
          <label>
            <legend>Description:</legend>
            <textarea name="description" />
          </label>
        </div>

        <Inp
          placeholder={String.placeholder_productPrice}
          icon={String.iconUsers}
          type={String.typeNumber}
        /> }

        {<CustomButton
          type={Buttonprop.productbutton}
          fontColor={Buttonprop.productFontColor}
        />
      </form> */}
export default Product;
