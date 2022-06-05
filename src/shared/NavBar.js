import React from 'react'
import { Navbar, Container } from "react-bootstrap";
export const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary">
                <Container>
                    <Navbar.Brand href="#home">Ecommerce React</Navbar.Brand>
                    <Navbar.Text>
                        Autor: <a href="#login">Miguel Cabrera Muñoz</a>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;
