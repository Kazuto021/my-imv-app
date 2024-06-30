import React from 'react'
import MenuBar from '../components/MenuBar'
// import InventoryItem from '../components/InventoryItem'
import { itemProps } from '../util/InvItemUtil'
import ProductCards from '../components/ProductCards'
import Navbar from '../components/Navbar'
import "./style/InventoryScreen.scss"
import { NavProps } from '../util/NavBarUtil'
import Footer from '../components/Footer'



const InventoryScreen = () => {
    return (
        <div className='inventory-wrapper'>
            
            <MenuBar />

            <div className='inventory-list right'>
                <Navbar companyName={NavProps.CompanyName}
                />
                <div className='inventory-card-list'>
                    {itemProps && itemProps.map((product) => {
                        return (
                            <ProductCards
                                uniqueKey={product.id}
                                name={product.name}
                                bgImg={product.img}
                                sold={product.sold}
                                commited={product.commited}
                                remaining={product.remaining}
                                others={product.others.total}
                            />)
                    })}
                </div>
                {/* {console.log(itemProps)} */}
                {/* {itemProps && itemProps.map((product) => {
                    return (
                        <ProductCards
                            uniqueKey={product.id}
                            name={product.name}
                            bgImg={product.img}
                            sold={product.sold}
                            commited={product.commited}
                            remaining={product.remaining}
                            others={product.others.total}
                        />)
                })} */}
                <Footer />

            </div>
        </div>
    )
}

export default InventoryScreen