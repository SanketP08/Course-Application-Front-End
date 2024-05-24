import React from "react";
import { Card, CardBody } from "reactstrap";

const Headers = ({ name, title }) => {
  return (
    <div>
      <Card className="my-1 bg-warning">
        <CardBody>
          <h2 className="text-center my-2">Welcome To Courses Application</h2>
        </CardBody>
      </Card>
    </div>
  );
};
export default Headers;
