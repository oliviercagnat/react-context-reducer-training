import React from 'react';
import { Navbar, Container, FormControl, Dropdown, Nav, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80, color: 'white' }}>
      <Container>
        <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl style={{ width: 500 }} placeholder="Search a product" className="m-auto" />
        </Navbar.Text>
        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" className="mr-2" />
              <Badge>{10}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }} variant="dark">
              <Dropdown.Item style={{ padding: 10 }}>Card is empty</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
