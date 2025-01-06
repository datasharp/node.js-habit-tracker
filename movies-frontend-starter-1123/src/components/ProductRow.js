import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';  

const ProductRow = ({ product }) => {
    const formattedPrice = product.price ? product.price.toLocaleString("en-US", { style: "currency", currency: "USD" }) : '';
    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{formattedPrice}</td>
            <td><ProductQuantity /></td>
        </tr>
    );
}

export default ProductRow;