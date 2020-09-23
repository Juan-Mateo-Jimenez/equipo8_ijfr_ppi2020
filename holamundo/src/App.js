import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron'
import Carrusel from './Components/Carousel'
import './App.css';



function App() {
  return (
    <>
      <Navbar />
      <Carrusel/>
    </>
  );
}

export default App;
