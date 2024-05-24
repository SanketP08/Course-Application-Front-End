import React, { useEffect } from "react";
import { Button, Container, Row, Col } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || Learn With Sanket";
  }, []);
  return (
    <div>
      <div className="custom-jumbotron text-center bg-light p-5 rounded-lg">
        <h1>Learn Code With Sanket</h1>
        <p>This is Developed By Sanket Patole</p>
        <Container>
          <Button color="primary" outline>
            Start Using
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
