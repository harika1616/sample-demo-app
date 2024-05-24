import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './CarouselSection.css';

const CarouselSection = () => {
  return (
    <div className="carousel-section">
      <Container className="px-0">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://fakeimg.pl/2000x800/6f8e00/ffffff?text=Header+Image"
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
              src="https://fakeimg.pl/2000x800/0095c6/ffffff?text=Header+Image"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://fakeimg.pl/2000x800/d85d3e/ffffff?text=Header+Image"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default CarouselSection;
