import { useState } from "react";
import "../style.css";
import Chip from "./Chip";

const skills = [
  { id: 0, label: "aigkjgxkd" },
  { id: 1, label: "ai" },
  { id: 2, label: "ai" },
];

export default function Card({ title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="skills-container">
        <h5>Skills:</h5>
        {skills.map((skill) => (
          <Chip skill={skill.label} key={skill.id} />
        ))}
      </div>
    </div>
  );
}
