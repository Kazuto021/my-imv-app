import React from 'react'
import "./styles/ProductCards.scss"
// import "../../assets/lessreso.jpeg"
const ProductCards = (props) => {
    const baseAddress = "../../assets/"
    const myColor = "red"
    const activateFluidFill = (e) => {
        // console.log(e)
        console.log(e.target.parentElement)
        
        const recurse=(e)=>{console.log("something")}
        recurse(e)
    }
    return (

        // <div className='card'>
        //     <h2>Kimetsu no Yaiba: Hashira Training Arcaaaaaaaaaaaaaaaaa</h2>
        //     <div className='card-img-holder'></div>
        //     <div className="stock-info">
        //         <div className='info-left'>
        //             <div>Sold:1000</div>
        //             <div>Commited:1200</div>
        //         </div>
        //         <div className='info-right'>
        //             <div>Remaning:100</div>'
        //             <div>Others:20000000000000000000000000000</div>
        //         </div>
        //     </div>
        //     <h3>Total:</h3>
        // </div>
        <div className='card' id={props.uniqueKey} key={props.uniqueKey} onClick={activateFluidFill} >
            <h2>{props.name}</h2>
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