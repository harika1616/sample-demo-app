import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './TwoColumnSection.css';

const TwoColumnSection = () => {
  return (
    <section id="two-column-section" className="p-3">
      <Row>
        <Col md={9}>
          <Row>
            <h2>Content</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Row>
          <Row>
            <h4>Sub Header</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Row>
        </Col>
        <Col md={3}>
          <div className="right-section">
            <h3>Navigation</h3>
            <div className="p-2 right-section-links-section">
              <ul className="nav flex-column">
                <li className="nav-item">Home</li>
                <li className="nav-item">Product</li>
                <li className="nav-item">Company</li>
                <li className="nav-item">Contact</li>
                {/* Add more nav items as needed */}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default TwoColumnSection;
