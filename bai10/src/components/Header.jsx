import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";
export default function Header() {
    return (
        <>
            {" "}
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to="/">Navbar</Link>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Nav className="me-auto"
                    style={{textDecoration:"none",color:"blue"}}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/features">Features</NavLink>  
                        <NavLink to="/price">Pricing</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}