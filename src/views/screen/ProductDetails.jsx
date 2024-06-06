import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./style/ProductDetailsScreen.scss"
const ProductDetails = () => {
    const [loaded, setLoaded] = useState(false);
    const [myData, setMyData] = useState(null); // Assuming the data is not an array initially
    const loc = useLocation();
    
    useEffect(() => {
        if (loc.state && loc.state.data) {
            const { data } = loc.state;
            setMyData(data);
            setLoaded(true);
        }
        console.table(loc.state)
    }, [loc.state]);
    
    // useEffect(() => {
        
    //     if (loaded) {
    //         console.log(myData);
    //     }
    // }, [myData, loaded]);
    
    if (!loaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className='detail-wrapper'>
            <h1>Product Details</h1>
            {/* Assuming myData contains a property called name */}
            <p>{myData.name}</p>
            <div className="render-product-img" style={{backgroundImage:`url(${myData.bgImg})`}} ></div>
            {/* Render other data properties here */}
        </div>
    );
}

export default ProductDetails;
