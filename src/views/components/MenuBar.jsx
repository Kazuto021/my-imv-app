import React from 'react'
import "../screen/style/admin.scss"
import "../components/styles/MenuBar.scss"

import Profile from "./Profile"
import MenuItem from "./MenuItem"

import { menuItemProperties } from "../util/MenuItemUtil"
import UserProp from '../util/UserProfile'
import { useNavigate } from 'react-router-dom'

import { LuLogOut } from "react-icons/lu";

const MenuBar = () => {
    const nav = useNavigate()
    const logOutUser = ()=>{
        localStorage.setItem("isLoggedIn","false")

        nav("/")
        alert("You have successfuly logged out")
    }
    return (
        <div className="left">
            <Profile StatusRequirement={UserProp.leftSideProfileStatus} scale={UserProp.leftScale} />
            <div className="menu">
                <div className="second-left-element">General</div>
                <MenuItem
                    source="dashboard.png"
                    content="Dashboard"
                    componentCalled="admin"
                />
                <a target="_self">
                    <MenuItem
                        source={menuItemProperties.productLogo}
                        content={menuItemProperties.productContent}
                        componentCalled={menuItemProperties.productPage}
                    />
                </a>
                <MenuItem
                    source={menuItemProperties.totalStockLogo}
                    content={menuItemProperties.totalStockContent}
                    componentCalled={menuItemProperties.inventoryPage}
                />
                <MenuItem
                    source={menuItemProperties.stockRemainingLogo}
                    content={menuItemProperties.remainingStockContent}
                    componentCalled={menuItemProperties.remainingStockPage}
                />
                <MenuItem
                    source={menuItemProperties.managementLogo}
                    content={menuItemProperties.managementContent}
                    componentCalled={menuItemProperties.managementPage}
                />
            </div>

            <div className='logout' onClick={logOutUser}>
                <div>Logout</div>
                <LuLogOut className='logout-icon'/>
            </div>
        </div>
    )
}

export default MenuBar