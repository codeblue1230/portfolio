// External Imports
import React from "react"
import { 
    Container,
    Nav,
    Navbar,
    NavLink
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand style={{padding: "3px 0", fontSize: "1.8rem", fontFamily: "League Spartan"}}>
                    <span><i>Marc Engle</i></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{fontSize: "1.35rem", fontFamily: "Roboto Slab"}}>
                        <NavLink style={{margin: "auto 50px auto 0"}}>Home</NavLink>
                        <NavLink style={{margin: "auto 50px auto 0"}}>About</NavLink>
                        <NavLink style={{margin: "auto 50px auto 0"}}>Portfolio</NavLink>
                        <NavLink>Contact Me</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}