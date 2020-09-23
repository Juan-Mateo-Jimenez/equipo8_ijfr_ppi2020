import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import '../App.css';

class Jumbo extends Component {
    render() {
        return (
            <>
                <Jumbotron fluid className="bg-jm">
                    <Container>
                        <h1>C&M Uniformes I.E INEM José Félix de Restrepo.</h1>
                        <p>
                            Este proyecto fue creado con el proposito de mejorar la calidad del servicio
                            de venta de uniformes en la institución.
    </p>
                    </Container>
                </Jumbotron>
            </>
        );
    }
}

export default Jumbo;