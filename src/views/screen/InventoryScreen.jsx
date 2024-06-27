import React from 'react'
import MenuBar from '../components/MenuBar'
import "./style/InventoryScreen.scss"
// import InventoryItem from '../components/InventoryItem'
import { itemProps } from '../util/InvItemUtil'
import ProductCards from '../components/ProductCards'


const InventoryScreen = () => {
    return (
        <div className='inventory-wrapper'>
            <MenuBar />
            <div className='inventory-list'>
                {console.log(itemProps)}
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

                {/* <ProductCards
                    name={itemProps[0].name}
                    bgImg={itemProps[0].img}
                    sold={itemProps[0].sold}
                    commited={itemProps[0].commited}
                    remaining={itemProps[0].remaining}
                    others={itemProps[0].others}
                />
                <ProductCards
                    name={itemProps[0].name}
                    bgImg={itemProps[0].img}
                    sold={itemProps[0].sold}
                    commited={itemProps[0].commited}
                    remaining={itemProps[0].remaining}
                    others={itemProps[0].others}
                />
                <ProductCards
                    name={itemProps[0].name}
                    bgImg={itemProps[0].img}
                    sold={itemProps[0].sold}
                    commited={itemProps[0].commited}
                    remaining={itemProps[0].remaining}
                    others={itemProps[0].others}
                /> */}
            </div>

            {/* <ProductCards/> */}


        </div>
    )
}

export default InventoryScreen