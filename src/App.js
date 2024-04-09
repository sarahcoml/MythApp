import React, { useState } from 'react';
import Navbar from "./components/NavBar";
import ClothCard from "./components/Card";
import FilterDropdown from "./components/FilterDropdown";
import Aggregator from "./components/Aggregator"; // Import the Aggregator component
import itemsData from "./data/itemsData.json";

function App() {
  const [items, setItems] = useState(itemsData);
  const [filteredItems, setFilteredItems] = useState(items);
  const [cart, setCart] = useState([]); // Use only one state variable for the cart

  const handleSort = (sortBy) => {
    let sortedItems = [...filteredItems];

    if (sortBy === 'priceLowToHigh') {
      sortedItems.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    } else if (sortBy === 'priceHighToLow') {
      sortedItems.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
    }

    setFilteredItems(sortedItems);
  };

  const handleFilter = ({ isVegan, isEcoFriendly }) => {
    let filtered = itemsData;

    if (isVegan) {
      filtered = filtered.filter(item => item.isVegan);
    }

    if (isEcoFriendly) {
      filtered = filtered.filter(item => item.isEcoFriendly);
    }

    setFilteredItems(filtered);
  };

  const addToCart = (item) => {
    setCart([...cart, item]); // Update the cart state variable when an item is added to the cart
  };

  // Define function to calculate total
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0);
  };

  return (
    <React.Fragment>
      <Navbar />
      <FilterDropdown handleSort={handleSort} handleFilter={handleFilter} />
      <div className="cloth-container">
        {filteredItems.map(item => (
          <ClothCard key={item.id} item={item} addToCart={addToCart} /> // Pass addToCart function to ClothCard
        ))}
      </div>
      <Aggregator items={cart} /> 
{/* 
      <div className="cart-container">
          <h2>Cart</h2>
          {cart.length === 0 && <p>The cart is empty.</p>}
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
          {cart.length > 0 && <p>Total: ${calculateTotal().toFixed(2)}</p>}
        </div> */}
    </React.Fragment>
  );
}

export default App;