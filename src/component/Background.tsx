import React from "react";
import backgroundImage from "../assets/ai-journey-bg.svg";
//add one typescript for one demo purpose
//other code base is in javascript
//for showcase purpose only
const BackgroundComponent = ({ children }: { children: React.ReactNode }) => {
  const styles: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  return <div style={styles}>{children}</div>;
};

export default BackgroundComponent;
