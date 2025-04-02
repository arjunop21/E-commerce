import React from "react";
import { Container, Table } from "react-bootstrap";



const orders = [
  { id: 1, product: "Laptop", quantity: 1, total: 1200 },
  { id: 2, product: "Phone", quantity: 2, total: 1600 },
];

const Orders = () => {
  return (
    <Container className="mt-4">
      <h2>Your Orders</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Orders;
