import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/Bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourse = () => {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    document.title = "All Courses";

    const getAllCoursesFromServer = () => {
      axios.get(`${base_url}/courses`).then(
        (response) => {
          // Success
          toast.success("Courses Has been Loaded");
          setCourse(response.data);
        },
        (error) => {
          // For error
          console.log(error);
          toast.error("Something Went Wrong");
        }
      );
    };

    getAllCoursesFromServer();
  }, []); // Empty dependency array ensures this runs only once on mount

  const updateCourseBy = (id) => {
    setCourse(courses.filter((c) => c.id != id));
  };

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of Courses are as Follows</p>
      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.id} course={item} update={updateCourseBy} />
          ))
        : "No Courses"}
    </div>
  );
};

export default AllCourse;
