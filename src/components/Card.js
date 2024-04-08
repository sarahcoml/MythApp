import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FaBookmark } from 'react-icons/fa'; // Import FaBookmark icon

import "../style/Card.css";

function ClothCard({ imgSrc, title, price, isEcoFriendly, isVegan }) {
    const [isSaved, setIsSaved] = useState(false); // State to manage save button's appearance

    // Function to handle saving the item
    const handleSave = () => {
        // Implement logic to add item to saved list
        console.log('Item saved!');
        setIsSaved(!isSaved); // Toggle isSaved state
    };

    return (
      <Card className="cloth-card" style={{ width: '18rem', border: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-img-container">
          <Card.Img variant="top" src={imgSrc} className="card-img" />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Price: {price}</Card.Text>
          <div>
            <Badge className="mr-1" variant="secondary">{isEcoFriendly ? 'Eco-Friendly' : null}</Badge>
            <Badge variant="success">{isVegan ? 'Vegan' : null}</Badge>
          </div>
          <div className="mt-3">
            <Button className="mr-2" variant="info">Add to Cart</Button>
            {/* Use FaBookmark icon as the save button */}
            <FaBookmark className={`save-icon ${isSaved ? 'saved' : ''}`} onClick={handleSave} />
          </div>
        </Card.Body>
      </Card>
    );
  }
  
  export default ClothCard;
