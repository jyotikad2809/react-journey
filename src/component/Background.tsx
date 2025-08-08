import React from "react";
import backgroundImage from "../assets/ai-journey-bg.svg";

const BackgroundComponent = ({ children }: { children: React.ReactNode }) => {
  const styles: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "200px",
    paddingRight: "200px",
  };

  return <div style={styles}>{children}</div>;
};

export default BackgroundComponent;
