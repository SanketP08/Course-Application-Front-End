import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>About Course Details App</h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Purpose</h2>
        <p style={styles.text}>
          The Course Details App is designed to help users manage their courses
          effectively. Whether you're a student or a teacher, this app allows
          you to add, view, and delete courses with ease.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Features</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Add new courses</li>
          <li style={styles.listItem}>View existing courses</li>
          <li style={styles.listItem}>Delete unwanted courses</li>
          {/* Add more features as needed */}
        </ul>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Us</h2>
        <p style={styles.text}>
          I am a developers passionate about creating useful and intuitive
          applications. Course Details App is one of my projects aimed at
          simplifying course management tasks for users.
        </p>
      </section>
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © 2024 Course Details App. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    maxWidth: "800px",
    padding: "20px",
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5em",
    margin: "0 0 10px",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "2em",
    marginBottom: "10px",
    borderBottom: "2px solid #eaeaea",
    paddingBottom: "5px",
  },
  text: {
    fontSize: "1.1em",
    lineHeight: "1.6",
  },
  list: {
    paddingLeft: "20px",
  },
  listItem: {
    fontSize: "1.1em",
    marginBottom: "10px",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    padding: "10px 0",
    borderTop: "1px solid #eaeaea",
  },
  footerText: {
    fontSize: "0.9em",
    color: "#999",
  },
};

export default About;
