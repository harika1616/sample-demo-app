import React from 'react';
import { Carousel } from 'react-bootstrap';

const Gallery = ({ images }) => {
  return (
    <div id="gallery">
      <div>
        <h2 className="text-center">Gallery</h2>
        <Carousel>
          {images.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around">
                {slide.map((image, i) => (
                  <img
                    key={i}
                    className="d-block w-25"
                    src={image}
                    alt={`Slide ${i}`}
                  />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
