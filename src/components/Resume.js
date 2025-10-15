import React from "react";

export default function Resume() {
  return (
    <div className="resume">
      <h2>Resume & Skills</h2>
      <ul>
        <li>JavaScript, React, Node.js</li>
        <li>Python, Django</li>
        <li>Git, CI/CD, GitHub Actions</li>
        <li>REST APIs, SQL, MongoDB</li>
      </ul>
      <a href="/resume.pdf" download>
        Download my resume (PDF)
      </a>
    </div>
  );
}