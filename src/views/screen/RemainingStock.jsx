// src/components/StockPage.js
import React, { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar';
import { itemProps } from '../util/InvItemUtil';
import "./style/RemainingStock.scss";

const RemainingStock = () => {
  const [stockData, setStockData] = useState({
    defective: 0,
    returned: 0,
    damaged: 0,
  });

  // useEffect(() => {
  //   // Fetch data from an API or define it statically
  //   const fetchData = () => {
  //     // Example data
  //     const data = {
  //       defective: 5,
  //       returned: 3,
  //       damaged: 2,
  //     };
  //     setStockData(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="stock-page">
      <MenuBar />
      <div className='remaining-items'>
        <table border={1}>
          <thead>
            <tr className='table-head'>
              <th rowSpan={2}>S.No</th>
              <th rowSpan={2}>Img</th>
              <th rowSpan={2}>Name</th>
              <th colSpan={3}>Remaining</th>
              <th rowSpan={2}>Total</th>
            </tr>
            <tr className='table-head'>
              <th>Defective</th>
              <th>Damaged</th>
              <th>Returned</th>
            </tr>
          </thead>
          <tbody>
            {itemProps && itemProps.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td><img className="product-img" height="100px" src={product.img} alt="product images" /></td>
                  <td><h5>{product.name}</h5></td>
                  <td>{product.others.defective}</td>
                  <td>{product.others.damaged}</td>
                  <td>{product.others.returned}</td>
                  <td>{product.others.total}</td>
                  
                </tr>

              )
            })}
          </tbody>

        </table>
        {/* <footer className="footer">
          <p>&copy; 2024 Inventory Management App. All rights reserved.</p>
        </footer> */}
      </div>

    </div>
  );
};

export default RemainingStock;
