import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("http://localhost:8000/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Codespaces Test</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>url</th>
              <th>username</th>
              <th>email</th>
              <th>is_staff</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.url}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.is_staff ? 'true' : 'false'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default App;
