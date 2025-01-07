import React from 'react';
import ProductRow from '../components/ProductRow.js';
import products from '../data/products.js';

function OrderPage() {
  return (
    <>
      <h2>Orders Page</h2>

      <article>
        <p>
          This is the page where you may order products. 
          Please input your choice for a single product from the table below. 
        </p>
            <legend>Select a product:</legend>
            
            <table>
              <caption>Products</caption>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Product</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
              {products.map((product, index) => (
                <React.Fragment key={index}>
                    <ProductRow product={product} />
                    <ProductRow product={product.company} />
                    <ProductRow product={product.price} />
                </React.Fragment>
            ))}

              </tbody>
            </table>

            <label htmlFor="quantity" className="required">Quantity:</label>
            <input type="number" id="quantity" name="quantity" placeholder="Enter quantity" className="required" />

            <label htmlFor="deliveryInstructions">Delivery Instructions:</label>
            <textarea 
              id="deliveryInstructions" 
              name="deliveryInstructions" 
              placeholder="Enter delivery instructions"
            ></textarea>

            <button type="submit">Submit</button>
         
      </article>
    </>
  );
}

export default OrderPage; 
