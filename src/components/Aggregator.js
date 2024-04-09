import React from 'react';
import itemsData from '../data/itemsData'; 
import "../style/Aggregator.css";

const Aggregator = ({ items = itemsData }) => {
    const totalSum = items.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.price.replace('$', '')), 0).toFixed(2);

    return (
        <div className="aggregator-section">
            <h2>Cart</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <span>{item.price}</span>
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