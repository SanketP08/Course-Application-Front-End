import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/Bootapi";
import { toast } from "react-toastify";
const AddCourse = () => {
  useEffect(() => {
    document.title = "All Course || Learn Code With Sanket";
  }, []);

  const [course, setCourse] = useState({});
  //Form Handler Function
  const handleForm = (e) => {
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
  };

  //Creating Function to post data on server
  const postDatatoServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Course Added Sucessfully");
        setCourse({ id: "", title: "", description: "" });
      },
      (error) => {
        console.log(error);
        console.log("Error");
        toast.error("Error Somethhing went wrong  ");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter Here "
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label for="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter Title Here"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter Description Here"
            id="description"
            style={{ height: 100 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container>
          <Button color="success" type="submit">
            Add Course
          </Button>
          <Button
            type="reset"
            onClick={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
            color="warning"
            style={{ marginLeft: "8px" }}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};
export default AddCourse;
