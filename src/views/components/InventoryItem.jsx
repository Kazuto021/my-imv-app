import React from 'react'
import "./styles/inventory.scss"
import Inp from './Inp'
import String from '../util/InpUtil'

const InventoryItem = (props) => {
    return (
        <div className="invItem" >
            <div className="subproperties">
                <Inp type={String.typeCheckBox}/>
            </div>
            <div className="subproperties container-img-name">
                <Inp type={String.typeImage} src={props.productImg}/>
                <h2>{props.itemName}</h2>
            </div>
            <div className="subproperties quantity">
                <Inp type={String.typeImage} src={String.editImage}/>
                <Inp type={String.typeNumber} placeholder={props.totalQuant} />
            </div>
            <div className="subproperties quantity">
                <Inp  type={String.typeImage} src={String.editImage}/>
                <Inp type={String.typeNumber} placeholder={props.itemRemaining} />
            </div>
            <div className="subproperties quantity">
                <Inp type={String.typeImage} src={String.editImage} />
                <Inp type={String.typeNumber} placeholder={props.itemRemaining} />
            </div>
            <div className="subproperties quantity"> 
                <Inp type={String.typeNumber} placeholder={props.itemRemaining} />
            </div>
            <div className="subproperties quantity">
                <Inp type={String.typeNumber} placeholder={props.itemRemaining} />
            </div>
        </div>


    )
}

export default InventoryItem