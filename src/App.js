import React from 'react';
import Navbar from "./components/NavBar";
import ClothCard from "./components/Card";
// import "./Card.css"; // Import CSS file

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="cloth-container">
        <ClothCard
          imgSrc={"https://i.pinimg.com/564x/ad/55/b4/ad55b41fad09fd39b2a4b49ac597bb76.jpg"}
          title="Example Title 1"
          description="This is an example description for card 1."
          buttonText="Learn More"
          buttonLink="/example"
        />
        <ClothCard
          imgSrc={"https://i.pinimg.com/564x/ad/55/b4/ad55b41fad09fd39b2a4b49ac597bb76.jpg"}
          title="Example Title 2"
          description="This is an example description for card 2."
          buttonText="See Details"
          buttonLink="/details"
        />
        <ClothCard
          imgSrc={"https://i.pinimg.com/564x/ad/55/b4/ad55b41fad09fd39b2a4b49ac597bb76.jpg"}
          title="Example Title 3"
          description="This is an example description for card 3."
          buttonText="View More"
          buttonLink="/more"
        />
        {/* Add more ClothCard components as needed */}
      </div>
    </React.Fragment>
  );
}

export default App;
