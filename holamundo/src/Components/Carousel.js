import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../img/carrusel1.png';
import '../App.css';

class Carrusel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="img-carrusel"
                        className="d-block w-100 h-100"
                        src= {img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cssslider.com/sliders/demo-8/data1/images/dirt_bike_motocross_motorcycle_motorbike_bike.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../img/3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Carrusel;