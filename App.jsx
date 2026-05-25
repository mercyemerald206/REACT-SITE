import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px" }}>
      
      <h1>Vidal Guinness</h1>
      <h3>Electrical Systems Advisor</h3>

      <p>
        I specialize in high-stakes electrical engineering decisions under uncertainty,
        focusing on system reliability, failure diagnostics, and trade-off optimization.
      </p>

      <hr />

      <h2>Projects</h2>

      <div>
        <h3>Intelligent Failure Diagnostic Engine</h3>
        <p>
          Diagnoses system failures using incomplete data through anomaly detection
          and probabilistic reasoning.
        </p>
        <a href="https://github.com/yourusername/intelligent-failure-diagnostic-engine">
          View Project
        </a>
      </div>

      <div>
        <h3>Engineering Trade-off Optimization Engine</h3>
        <p>
          Models cost, reliability, and performance trade-offs to determine optimal system configurations.
        </p>
        <a href="https://github.com/yourusername/engineering-tradeoff-optimization-engine">
          View Project
        </a>
      </div>

      <hr />

      <h2>Case Studies</h2>
      <ul>
        <li>
          <a href="/case-studies/failure-diagnostic-case-study.pdf">
            Failure Diagnostic Case Study
          </a>
        </li>
        <li>
          <a href="/case-studies/tradeoff-optimization-case-study.pdf">
            Trade-off Optimization Case Study
          </a>
        </li>
      </ul>

      <hr />

      <h2>Contact</h2>
      <p>Email: your@email.com</p>
      <p>LinkedIn: yourlink</p>
    </div>
  );
}
