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
import { useNavigate } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";
import { graphs } from '../util/Visualization';

const Admin = () => {
  const nav = useNavigate()
  console.log(typeof localStorage.getItem("isLoggedIn"))
  if(localStorage.getItem("isLoggedIn")==="true"){
    return (
      <div className="admin-wrapper-class">
        <MenuBar/>
        <div className="right">
          <div className="navbar-top">
            <Navbar companyName={NavProps.CompanyName} />
          </div>
          <div className="navbar-bottom">Graphs</div>
          <section className="user-information">
            <div className='graph-grid'>
              {graphs&&graphs.map((e)=>{
                return(
                  <img className="graphs" key={e.id} src={e.imgSrc} alt="" />
                )
              })}
            </div>
          </section>
        </div>
      </div>
    );
  }else{
    return(
      <div className='' style={{fontSize:"3rem"}} >
        Please <span style={{color:'red',fontSize:"3rem",cursor:"pointer"}} onClick={()=>nav("/")}>Login/Register</span> first in order to start using Inventory Management App!
      </div>
    )

  
};
}
export default Admin;
