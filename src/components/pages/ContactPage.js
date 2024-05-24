import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ContactPage = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <Container>
      <h2>Contact Page</h2>
      <p>This is the Contact page content.</p>
      <button onClick={handleGoBack}>Go Back</button>
    </Container>
  );
};

export default ContactPage;
