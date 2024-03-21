import React from 'react'
import "../screen/style/admin.scss"
import "../components/styles/MenuBar.scss"

import Profile from "./Profile"
import MenuItem from "./MenuItem"

import {menuItemProperties} from "../util/MenuItemUtil"
import UserProp from '../util/UserProfile'

UserProp
const MenuBar = () => {
    return (
        <div className="left">
            <Profile StatusRequirement={UserProp.leftSideProfileStatus} scale={UserProp.leftScale} />

            <div className="second-left-element">General</div>

            <div className="menu">
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
                    source={menuItemProperties.stockRemainingLogo}
                    content={menuItemProperties.managementContent}
                    componentCalled={menuItemProperties.managementPage}
                />
            </div>
        </div>
    )
}

export default MenuBar