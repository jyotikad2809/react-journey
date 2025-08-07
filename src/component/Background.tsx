import React from "react";
import backgroundImage from "../assets/ai-journey-bg.svg";

//add one typescript for one demo purpose
//other code base is in javascript
//for showcase purpose only
const BackgroundComponent = ({ children }: { children: React.ReactNode }) => {
  const styles = {
    container: {
      backgroundImage: `url(${backgroundImage})`,
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingLeft: "200px",
      paddingRight: "200px",
    },
  };

  return <div style={styles.container}>{children}</div>;
};

export default BackgroundComponent;
