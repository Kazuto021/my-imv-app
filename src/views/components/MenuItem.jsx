import React from 'react'

import {useNavigate} from 'react-router-dom'
import "../components/styles/menuitem.scss"
import Product from "./Product" 
const MenuItem = (props) => {
    var value = props.componentCalled
    const nav =useNavigate()
     const menuItemAction = ()=>{
        nav("/"+value)
    } 
    return (
        <div className='menu-item' onClick={menuItemAction}>
            <div className='menu-item-icon'>
                <img src={props.source} alt="" />
            </div>
            <div className='menu-item-title'>{props.content}</div>
        </div>
    )
}
export default MenuItem