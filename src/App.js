import React from 'react';
import Navbar from "./components/NavBar";
import ClothCard from "./components/Card";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="filter-links">
        <a href="/eco-friendly" className="mr-2">Eco-Friendly</a>
        <a href="/vegan">Vegan</a>
      </div>
      <div className="cloth-container d-flex flex-wrap justify-content-center">
        <ClothCard 
          imgSrc={"https://i.pinimg.com/564x/ad/55/b4/ad55b41fad09fd39b2a4b49ac597bb76.jpg"}
          title="Example Title 1"
          price="$19.99"
          isEcoFriendly={true}
          isVegan={false}
        />
        <ClothCard 
          imgSrc={"https://i.pinimg.com/564x/ad/55/b4/ad55b41fad09fd39b2a4b49ac597bb76.jpg"}
          title="Example Title 2"
          price="$29.99"
          isEcoFriendly={false}
          isVegan={true}
        />
        {/* Add more ClothCard components as needed */}
      </div>
    </React.Fragment>
  );
}

export default App;
