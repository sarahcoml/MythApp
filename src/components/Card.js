import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/Card.css";

function ClothCard({ imgSrc, title, description, buttonText, buttonLink }) {
    return (
      <Card className="cloth-card" style={{ width: '18rem', border: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-img-container">
          <Card.Img variant="top" src={imgSrc} className="card-img" />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" href={buttonLink}>
            {buttonText}
          </Button>
        </Card.Body>
      </Card>
    );
  }
  export default ClothCard;
