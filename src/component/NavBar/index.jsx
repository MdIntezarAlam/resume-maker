import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
const NavBar = () => {
    return (
        <Navbar expand="md " bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">College Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="/register">Make Resume</Nav.Link>
                        <Nav.Link href="/pagenotfound">Contact</Nav.Link>
                        <Nav.Link href="/ourteam">Our Team</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar