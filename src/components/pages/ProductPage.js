import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ProductPage = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <Container>
      <h2>Product Page</h2>
      <p>This is the Product page content.</p>
      <button onClick={handleGoBack}>Go Back</button>
    </Container>
  );
};

export default ProductPage;
//export default withRouter(ProductPage);
