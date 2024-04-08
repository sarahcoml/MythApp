import React, { useState } from 'react';

function FilterDropdown({ handleSort, handleFilter }) {
  const [sortBy, setSortBy] = useState('');
  const [isVegan, setIsVegan] = useState(false);
  const [isEcoFriendly, setIsEcoFriendly] = useState(false);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    handleSort(value);
  };

  const handleVeganChange = (e) => {
    const checked = e.target.checked;
    setIsVegan(checked);
    handleFilter({ isVegan: checked, isEcoFriendly });
  };

  const handleEcoFriendlyChange = (e) => {
    const checked = e.target.checked;
    setIsEcoFriendly(checked);
    handleFilter({ isVegan, isEcoFriendly: checked });
  };

  return (
    <div>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
      </select>
      <label>
        <input type="checkbox" checked={isVegan} onChange={handleVeganChange} />
        Vegan
      </label>
      <label>
        <input type="checkbox" checked={isEcoFriendly} onChange={handleEcoFriendlyChange} />
        Eco-Friendly
      </label>
    </div>
  );
}

export default FilterDropdown;
