import React from "react";

export default function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <a href="/resume.pdf" download className="download-btn">
        Download my resume (PDF)
      </a>
    </div>
  );
}