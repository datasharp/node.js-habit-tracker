import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const ProductQuantity = () => {
    const [quantity, setQuantity] = useState(0);

    const increase = () => {
        if (quantity < 10) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    const decrease = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div>
            <FaAngleUp onClick={increase} />
            <FaAngleDown onClick={decrease} />
            {quantity}
        </div>
    );
}

export default ProductQuantity;