import React from 'react';
import Navbar from "./components/NavBar";
import ClothCard from "./components/Card";
import itemsData from "./data/itemsData.json";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="cloth-container">
        {itemsData.map(item => (
          <ClothCard key={item.id} itemId={item.id} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
