import "../style.css";
import Chip from "./Chip";

export default function Card({ title, skills }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="skill-wrapper">
        <span className="skill-title">Skills:</span>
        <div className="skills-container">
          {skills.map((skill) => (
            <Chip skill={skill} key={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
