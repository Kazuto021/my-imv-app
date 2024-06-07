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
        <div className='detail-wrapper flex-column'>
            <h1>Product Details</h1>

            <div className='product-detail-card'>
                <div className='product-left-info flex-column'>
                    <div className="render-product-img" style={{ backgroundImage: `url(${myData.bgImg})` }} ></div>
                    <h3>Total: {myData.sold + myData.commited + myData.remaining + myData.others}</h3>

                </div>

                <div className='product-right-info flex-column'>
                    <h2>{myData.name}</h2>
                    <div className='quantity-info'>
                        <form action="" className='flex-column'>
                            <span>
                                <label for="sold">Sold:</label>
                                <input id="sold" type="number" name="Hello" value={myData.sold} disabled />
                            </span>
                            <span>
                                <label for="remaining">Remaining:</label>
                                <input id="remaining" type="number" name="Hello" value={myData.remaining} disabled />
                            </span>
                            <input id="commited" type="number" name="Hello" value={myData.commited} disabled />
                            <input id="others" type="Number" name="Hello" value={myData.others} disabled />
                            <button type='submit'>Save</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductDetails;
