import React, { useEffect, useState } from 'react';
import { redirect, useLocation, useNavigate } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";

import "./style/ProductDetailsScreen.scss"
const ProductDetails = () => {
    let nav = useNavigate();
    const [text, setText] = useState({
        sold: "",
        remaining: "",
        commited: "",
        others: ""
    });
    const [total, setTotal] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [disabledStatus, setDisabledStatus] = useState(true);
    const [myData, setMyData] = useState(null); // Assuming the data is not an array initially
    const loc = useLocation();

    useEffect(() => {
        if (loc.state && loc.state.data) {
            const { data } = loc.state;
            setMyData(data);
            setLoaded(true);
        }
        console.table(loc.state)
        console.log(myData)
    }, [loc.state]);

    const inpStatusSetter = () => {
        setDisabledStatus(false)
    }
    const textHandler = (e) => {
        if (e.target.value >= 0) {
            setText({
                ...text,
                [e.target.name]: e.target.value
            }
            )
        }

    }
    const submitHandler = (e) => {
        e.preventDefault()
        setDisabledStatus(true)
        let cumSum = 0
        for (let i in text) {
            console.log(i + " " + text[i])
            if (text[i] === "") {
                setText({
                    ...text,
                    i: myData[i]

                })
                console.log(myData[i])
                cumSum += parseInt(myData[i])
            } else {
                cumSum += parseInt(text[i])
            }
        }
        if (parseInt(text.sold) & parseInt(text.commited) & parseInt(text.remaining) & parseInt(text.others)) {
            console.log("if condition working   ")
            
            // setTotal(parseInt(text.sold) + parseInt(text.commited) + parseInt(text.remaining) + parseInt(text.others))
        }
        setTotal(cumSum)
    }

    if (!loaded) {
        return (
            <div className='render-empty'>
                Please Choose a product from <span style={{ color: "red", cursor: "pointer" }} onClick={() => nav("/inventory")}>inventory</span> page
            </div>
        );
    }

    return (
        <div className='detail-wrapper flex-column'>
            <h1>Product Details</h1>

            <div className='product-detail-card'>
                <div className='product-left-info flex-column'>
                    <div className="blur-class"></div>
                    <div className="render-product-img" style={{ backgroundImage: `url(${myData.bgImg})` }} ></div>
                    <h3>Total: {total === 0 ?
                        (myData.sold + myData.commited + myData.remaining + myData.others)
                        :
                        (total)}</h3>

                </div>
                {/* {
                    myData&&myData.map
                } */}
                <div className='product-right-info flex-column'>
                    <h2>{myData.name}</h2>
                    <div className='quantity-info'>
                        <div className='edit flex'>
                            <FaEdit onClick={inpStatusSetter} id='icon' />
                        </div>
                        <form action="" className='flex-column'>
                            <span>
                                <label htmlFor="sold">Sold:</label>
                                <input id="sold" type="number" name="sold" onChange={textHandler} placeholder={myData.sold} value={text.sold} disabled={disabledStatus} />
                            </span>
                            <span>
                                <label htmlFor="remaining">Remaining:</label>
                                <input id="remaining" type="number" name="remaining" onChange={textHandler} placeholder={myData.remaining} value={text.remaining} disabled={disabledStatus} />
                            </span>
                            <span>
                                <label htmlFor="commited">Commited:</label>
                                <input id="commited" type="number" name="commited" onChange={textHandler} placeholder={myData.commited} value={text.commited} disabled={disabledStatus} />

                            </span>
                            <span>
                                <label htmlFor="others">Others:</label>
                                <input id="others" type="Number" name="others" onChange={textHandler} placeholder={myData.others} value={text.others} disabled={disabledStatus} />
                            </span>
                            <button type='submit' onClick={submitHandler} disabled={disabledStatus}>Save</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductDetails
