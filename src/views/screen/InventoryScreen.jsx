import React from 'react'
import MenuBar from '../components/MenuBar'
import "./style/InventoryScreen.scss"
import InventoryItem from '../components/InventoryItem'
import {itemProps}  from '../util/InvItemUtil'

const InventoryScreen = () => {
    return (
        <div className='inventory-wrapper'>
            <MenuBar />
            <div className='inventory-list'>
                
                <InventoryItem
                    itemName={itemProps.itemName1}
                    totalQuant={itemProps.itemTotalQuant1}
                    itemRemaining={itemProps.itemRemaining1}
                    src={ itemProps.productImg}
                />
                <InventoryItem
                    itemName={itemProps.itemName1}
                    totalQuant={itemProps.itemTotalQuant1}
                    itemRemaining={itemProps.itemRemaining1}
                // src={ }
                />
                <InventoryItem
                    itemName={itemProps.itemName1}
                    totalQuant={itemProps.itemTotalQuant1}
                    itemRemaining={itemProps.itemRemaining1}
                // src={ }
                />
                <InventoryItem
                    itemName={itemProps.itemName1}
                    totalQuant={itemProps.itemTotalQuant1}
                    itemRemaining={itemProps.itemRemaining1}
                // src={ }
                />
                <InventoryItem
                    itemName={itemProps.itemName1}
                    totalQuant={itemProps.itemTotalQuant1}
                    itemRemaining={itemProps.itemRemaining1}
                // src={ }
                />
            </div>

        </div>
    )
}

export default InventoryScreen