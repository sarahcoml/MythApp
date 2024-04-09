import React from 'react';
import itemsData from '../data/itemsData'; 
import "../style/Aggregator.css";

const Aggregator = ({ items = itemsData, removeFromCart }) => { // Add removeFromCart as a prop
    const totalSum = items.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.price.replace('$', '')), 0).toFixed(2);

    return (
        <div className="aggregator-section">
            <h2>Cart</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <span>{item.price}</span>
                        <button onClick={() => removeFromCart(item)}>Remove</button> {/* Add a "Remove" button for each item */}
                    </li>
                ))}
            </ul>
            <div>
                <strong>Total: ${totalSum}</strong>
            </div>
        </div>
    );
};

export default Aggregator;