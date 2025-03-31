import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card className="m-3 p-3 rounded">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
        {product.stock > 0 ? (
          <Button variant="primary">Buy Now</Button>
        ) : (
          <Button variant="danger" disabled>Out of Stock</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
