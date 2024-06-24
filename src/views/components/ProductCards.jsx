import React, { useEffect, useState } from 'react'
import "./styles/ProductCards.scss"
import { useNavigate } from 'react-router-dom';
// import "../../assets/lessreso.jpeg"
const ProductCards = (props) => {
    const nav = useNavigate()
    const [data,setData] = useState({
        key: props.uniqueKey,
        name:props.name,
        bgImg:props.bgImg,
        sold: props.sold,
        commited: props.commited,
        remaining: props.remaining,
        others: props.others
    });
    useEffect(()=>{
        console.table(data)
    },[])
    const onClickPrintData = (e)=>{
        nav("/ProductDetails",{state:{data}})
        console.log(e)
    }
    // const activateFluidFill = (e) => {
    //     // console.log(e)
    //     console.log(e.target.parentElement)
        
    //     const recurse=(e)=>{console.log("something")}
    //     recurse(e)
    // }
    return (
        <div className='card' id={props.uniqueKey} key={props.uniqueKey} onClickCapture={onClickPrintData} >
            <h2>{(props.name).toUpperCase()}</h2>
            <div className='card-img-holder'
                style={
                    {
                        // backgroundColor:myColor,
                        backgroundImage: `url(${props.bgImg})`

                    }}>
                
            </div>
            <div className="stock-info">
                <div className='info-left'>
                    <div>Sold:{props.sold}</div>
                    <div>Commited:{props.commited}</div>
                </div>
                <div className='info-right'>
                    {/* <div>Remaning:{props.remaining}</div> */}
                    <div>Remaning:{props.remaining} </div>
                    <div>Others:{props.others}</div>
                </div>
            </div>
            <h3>Total:{props.sold + props.remaining + props.commited + props.others}</h3>
        </div>
    )
}   
 
export default ProductCards