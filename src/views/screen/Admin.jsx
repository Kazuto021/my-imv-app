// import React from "react";
// import MenuItem from "../components/MenuItem";
// import { menuItemProperties } from "../util/MenuItemUtil";
import Navbar from '../components/Navbar'
import { NavProps } from "../util/NavBarUtil";
// import UserProp from "../util/UserProfile"
import "./style/admin.scss";
import "../components/styles/navbar.scss";
// import Profile from "../components/Profile";
import MenuBar from "../components/MenuBar";
const Admin = () => {
  return (
    <div className="admin-wrapper-class">
      <MenuBar/>
      <div className="right">
        <div className="navbar-top">
          <Navbar companyName={NavProps.CompanyName} />
        </div>
        <div className="navbar-bottom">PRODUCTS</div>
        <section className="user-information"></section>
      </div>
    </div>
  );
};

export default Admin;
