import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify"; // Import the toast function
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify
import "./App.css";
import Home from "./component/Home";
import Course from "./component/Course";
import AllCourses from "./component/AllCourses";
import AddCourse from "./component/AddCourse";
import Header from "./component/Header";
import Menus from "./component/Menus";
import About from "./component/About"; // Import the About component
import Contact from "./component/Contact"; // Import the Contact component

function App() {
  const bthHandle = () => {
    toast("This is my First Message");
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<AllCourses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />{" "}
                {/* Add this Route for the Contact page */}
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
