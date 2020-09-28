import React from 'react';
import { Alert } from 'react-bootstrap';

function NotFound() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4 mx-auto">
          <div className="text-center bbox-title border" >
            <h4>Not found</h4>
          </div>
          <div className="bbox-box border">
            <Alert variant="danger" >
              Sorry, the page you are looking for in not found, you can <br></br><Alert.Link href="/">Go back to home page</Alert.Link>.
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
