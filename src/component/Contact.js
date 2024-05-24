import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Contact Us</h1>
      </header>
      <section style={styles.section}>
        <p style={styles.text}>
          Have a question or feedback? We'd love to hear from you! Contact us
          using the information below:
        </p>
        <div style={styles.contactInfo}>
          <p>
            <strong>Email:</strong> sanketpatole.vr46@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +80880800888
          </p>
          <p>
            <strong>Address:</strong> Nashik, India{" "}
          </p>
        </div>
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
  text: {
    fontSize: "1.1em",
    lineHeight: "1.6",
  },
  contactInfo: {
    fontSize: "1.1em",
    lineHeight: "1.6",
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

export default Contact;
