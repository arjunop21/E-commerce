import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addProduct } from "../redux/productSlice"; // Import addProduct
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.auth); // Get user info

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct({ name, price, description, stock }));
    setName("");
    setPrice("");
    setDescription("");
    setStock("");
  };

  return (
    <Container className="mt-4">
      <h2>Featured Products</h2>
      {loading && <Loader />}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Only show form if user is an admin */}
      {userInfo?.isAdmin && (
        <Form onSubmit={handleAddProduct} className="mb-4">
          <h4>Add New Product</h4>
          <Row>
            <Col md={3}>
              <Form.Control
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Col>
            <Col md={2}>
              <Form.Control
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Col>
            <Col md={2}>
              <Form.Control
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
              />
            </Col>
            <Col md={1}>
              <Button type="submit" variant="success">
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      )}

      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
