import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';

class navbar extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" className="bg-nav" variant="light" >
                    <Navbar.Brand className="text-align-center" href="#home">C&M</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Inicio</Nav.Link>
                            <Nav.Link href="#tienda">Tienda</Nav.Link>
                            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                            <Nav.Link href="#contacto">Contactanos</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className="links-blancos">Iniciar sesión</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" className="links-blancos">
                                Registrarse
      </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default navbar;