import React from "react";
import backgroundImage from "../assets/ai-journey-bg.svg";
import logo from "../assets/logo.svg";

//add one typescript for one demo purpose
//other code base is in javascript
//for showcase purpose only
const BackgroundComponent = ({ children }: { children: React.ReactNode }) => {
  const styles = {
    container: {
      backgroundImage: `url(${backgroundImage})`,
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingLeft: "200px",
      paddingRight: "200px",
    },
    titleLogo: {
      backgroundImage: `url(${logo})`,
      position: "absolute",
      top: 50,
      left: 50,
      width: "96px",
      height: "96px",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleLogo} />
      {children}
    </div>
  );
};

export default BackgroundComponent;
