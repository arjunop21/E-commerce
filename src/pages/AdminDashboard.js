import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getOrders } from "../redux/adminSlice";
import { Table, Container, Alert, Spinner } from "react-bootstrap";

const AdminDashboard = () => {
  console.log("admin here")
  const dispatch = useDispatch();
  const { users, orders, error, loading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getOrders());
  }, [dispatch]);
  console.log("users: ", users)

  return (
    <Container>
      <h2>Admin Dashboard</h2>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      
      {/* Users Table */}
      <h3>Registered Users</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Orders Table */}
      <h3>Customer Orders</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Total Price</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.user.name}</td>
              <td>${order.totalPrice.toFixed(2)}</td>
              <td>
                {order.products.map((p) => (
                  <p key={p.product}>{p.quantity}x {p.product}</p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminDashboard;
