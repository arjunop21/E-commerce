import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";
import { Form, Button, Container } from "react-bootstrap";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ name, description, price, stock }));
  };

  return (
    <Container>
      <h2>Add Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Button type="submit">Add Product</Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
