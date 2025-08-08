import React from "react";

const Card = ({ title, skills }) => {
  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
    padding: "20px",
    maxWidth: "350px",
    zIndex: 2,
    display: "grid",
    gridTemplateRows: "auto 1fr",
    gap: "12px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: 700,
  };

  const skillsSectionStyle = {
    display: "flex",
    gap: "8px",
  };

  const skillsLabelStyle = {
    fontSize: "16px",
    fontWeight: 600,
    margin: 0,
  };

  const skillsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    flex: 1,
  };

  const skillStyle = {
    padding: "6px 12px",
    fontSize: "13px",
    fontWeight: 500,
    backgroundColor: "lightblue",
    borderRadius: "20px",
    flexShrink: 0,
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={skillsSectionStyle}>
        <h5 style={skillsLabelStyle}>Skills:</h5>
        <div style={skillsContainerStyle}>
          {skills.map((skill, index) => (
            <span key={index} style={skillStyle}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
