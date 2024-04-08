import React, { useState } from 'react';
import Navbar from "./components/NavBar";
import ClothCard from "./components/Card";
import FilterDropdown from "./components/FilterDropdown";
import itemsData from "./data/itemsData.json";

function App() {
  const [items, setItems] = useState(itemsData);
  const [filteredItems, setFilteredItems] = useState(items);

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

  return (
    <React.Fragment>
      <Navbar />
      <FilterDropdown handleSort={handleSort} handleFilter={handleFilter} />
      <div className="cloth-container">
        {filteredItems.map(item => (
          <ClothCard key={item.id} item={item} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
