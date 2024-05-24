import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const CompanyPage = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <Container>
      <h2>Company Page</h2>
      <p>This is the Company page content.</p>
      <button onClick={handleGoBack}>Go Back</button>
    </Container>
  );
};

export default CompanyPage;
