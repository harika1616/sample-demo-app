import React from 'react';
import { useHistory } from 'react-router-dom';

const TestPage = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <div>
      <h2>TestPage Page</h2>
      <p>This is the Company page content.</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default TestPage;
