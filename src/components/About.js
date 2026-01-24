import React from "react";

export default function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        Junior Software Engineer with strong foundations in computer science, applied mathematics, and data engineering. Experienced in academic tutoring, production technical support at Amazon, and intensive software engineering training at WeThinkCode_. Passionate about building reliable, production-ready software systems and continuously improving engineering skills.
      </p>
      <h2>Technical Skills</h2>
      <div className="skills">
        <h3>Programming</h3>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
        </ul>
        <h3>Software Engineering</h3>
        <ul>
          <li>Object-Oriented Programming</li>
          <li>Data Structures & Algorithms</li>
          <li>System Design</li>
          <li>Debugging & Testing</li>
        </ul>
        <h3>Data Engineering</h3>
        <ul>
            <li>SQL & NoSQL Databases</li>
            <li>Data Modelling</li>
            <li>ETL Pipelines (using Airflow)</li>
            <li>Batch & Stream Processing (using Spark and Kafka)</li>
            <li>Distributed Storage Systems (HDFS, Amazon S3)</li>
            <li>Containerization with Docker</li>
        </ul>
        <h3>Web Development</h3>
        <ul>
          <li>MERN Stack</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
        <h3>Dev Ops</h3>
        <ul>
          <li>Git</li>
          <li>CI/CD Pipelines</li>
          <li>Docker</li>
          <li>Linux</li>
          <li>Firebase (Auth, Firestore, Hosting)</li>
        </ul>
        <h3>Generative AI</h3>
        <ul>
            <li>foundational & applied use</li>
        </ul>
      </div>
    </div>
  );
}