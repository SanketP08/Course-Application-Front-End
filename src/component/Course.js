import axios from "axios";
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import base_url from "../api/Bootapi";
import { toast } from "react-toastify";

const Course = ({ course, update }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Successfully Deleted");
        update(id);
      },
      (error) => {
        toast.error("Course Not Deleted, Server Problem");
      }
    );
  };

  const updateCourse = (course) => {
    axios.put(`${base_url}/courses`, course).then(
      (response) => {
        toast.success("Successfully Updated");
        update(response.data); // Assuming update function handles the updated course
      },
      (error) => {
        toast.error("Course Not Updated, Server Problem");
      }
    );
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button
            onClick={() => {
              deleteCourse(course.id);
            }}
            color="danger"
          >
            Delete
          </Button>
          <Button
            onClick={() => {
              updateCourse(course);
            }}
            color="warning"
            style={{ marginLeft: "12px" }}
          >
            Update
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
