// External Imports
import React from "react"
import { 
    Container,
    Nav,
    Navbar,
    NavLink
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from "@mui/system"

const Circle = styled("span")({
    padding: "10px 5px 10px 5px",
    border: "solid white 2px",
    borderRadius: "1000px",
})

export const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand style={{padding: "3px 0", fontSize: "1.8rem", fontFamily: "League Spartan"}}>
                    <Circle><i>ME</i></Circle>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{fontSize: "1.35rem", fontFamily: "Roboto Slab"}}>
                        <NavLink href="/" style={{margin: "auto 50px auto 0"}}>Home</NavLink>
                        <NavLink href="/about" style={{margin: "auto 50px auto 0"}}>About</NavLink>
                        <NavLink href="/portfolio" style={{margin: "auto 50px auto 0"}}>Portfolio</NavLink>
                        <NavLink href="/contact">Contact Me</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}