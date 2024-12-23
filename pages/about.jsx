import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";


const AboutPage = () => {
  const portfolio = {
    personalInfo: {
      name: "Athervi",
      role: "Full Stack MERN Developer",
      achievements: "Smart India Hackathon Finalist",
      education: "Final Year Student",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
      bio: "Currently, I am in my final year of studies, always eager to learn and grow in the tech world. I specialize in building dynamic and responsive web applications using the MERN stack.",
    },
    experience: {
      company: "CareerPhi",
      role: "Intern",
      duration: "Aug 2024 - Nov 2024",
      responsibilities: [
        "Contributed to the development of internal tools and applications using the MERN stack.",
        "Collaborated with a team of developers to enhance user interfaces and improve application performance.",
        "Worked on optimizing backend APIs and integrating third-party services to enhance functionality.",
      ],
    },
  };

  const styles = {
    container: {
      display: "flex",
      // padding: '16px',
      color: "#333",
      gap: "16px",
      width: "78vw",
      height: "78vh",
      // backgroundColor: "white",
    },
    editor: {
      // flex: '0 0 600px',
      backgroundColor: "#24292e",
      minHeight: "80vh",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      overflowY: "scroll",
      borderRadius: "8px",
      width: "60%",
    },
    preview: {
      flex: 1,
      padding: "16px",
      borderRadius: "8px",
      backgroundColor: "white",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      overflowY: "auto",
      width: "50%",
      height: "78vh",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#1a73e8",
      marginBottom: "16px",
    },
    subtitle: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#2b7a78",
      marginBottom: "12px",
    },
    text: {
      marginBottom: "8px",
    },
    list: {
      listStyle: "disc",
      marginLeft: "20px",
    },
  };

  const htmlCode = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - About Me</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <main class="container">
      <section class="about-section">
        <h1>About Me</h1>
        
        <article class="personal-info">
          <div class="info-content">
            <p><strong>Name:</strong> Athervi</p>
            <p><strong>Role:</strong> Full Stack MERN Developer</p>
            <p><strong>Achievements:</strong> Smart India Hackathon Finalist</p>
            <p><strong>Education:</strong> Final Year Student</p>
            <p><strong>Skills:</strong> MongoDB, Express.js, React.js, Node.js</p>
            <p><strong>Bio:</strong> Currently, I am in my final year of studies,
             always eager to learn and grow in the tech world.</p>
          </div>
        </article>

        <article class="experience">
          <h2>Experience</h2>
          <div class="experience-content">
            <p><strong>Company:</strong> CareerPhi</p>
            <p><strong>Role:</strong> Intern</p>
            <p><strong>Duration:</strong> Aug 2024 - Nov 2024</p>
            <p><strong>Responsibilities:</strong></p>
            <ul class="responsibilities-list">
              <li>Contributed to the development of internal tools and applications
               using the MERN stack.</li>
              <li>Collaborated with a team of developers to enhance user 
              interfaces.</li>
              <li>Worked on optimizing backend APIs and integrating 
              third-party services.</li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  </body>
</html>`;

  return (
    <div style={styles.container}>
      <div style={styles.editor}>
      <SyntaxHighlighter
  language="html"
  style={atomDark}
  customStyle={{
    margin: 0,
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#24292e",
    overflowX: "auto",
    whiteSpace: "pre-wrap", // Ensures wrapping
    wordBreak: "break-word",
    scrollbarWidth: "thin", // For Firefox
    scrollbarColor: "#555 #333", // For Firefox
  }}
  showLineNumbers
>
  {htmlCode}
</SyntaxHighlighter>

      </div>

      <div style={styles.preview}>
        {/* <h3 style={styles.title}>Preview</h3> */}

        <div style={styles.text}>
          <h4 style={styles.subtitle}>About Me</h4>
          <div>
            <p>
              <strong>Name:</strong> {portfolio.personalInfo.name}
            </p>
            <p>
              <strong>Role:</strong> {portfolio.personalInfo.role}
            </p>
            <p>
              <strong>Achievements:</strong>{" "}
              {portfolio.personalInfo.achievements}
            </p>
            <p>
              <strong>Education:</strong> {portfolio.personalInfo.education}
            </p>
            <p>
              <strong>Skills:</strong>{" "}
              {portfolio.personalInfo.skills.join(", ")}
            </p>
            <p>
              <strong>Bio:</strong> {portfolio.personalInfo.bio}
            </p>
          </div>
        </div>

        <div style={styles.text}>
          <h4 style={styles.subtitle}>Experience</h4>
          <div>
            <p>
              <strong>Company:</strong> {portfolio.experience.company}
            </p>
            <p>
              <strong>Role:</strong> {portfolio.experience.role}
            </p>
            <p>
              <strong>Duration:</strong> {portfolio.experience.duration}
            </p>
            <p>
              <strong>Responsibilities:</strong>
            </p>
            <ul style={styles.list}>
              {portfolio.experience.responsibilities.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
