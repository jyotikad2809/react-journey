import React from "react";
import Card from "./Card";

const Timeline = ({ items }) => {
  const timelineContainer = {
    position: "relative",
    padding: "50px 0",
  };

  const centerLine = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    width: "4px",
    backgroundColor: "royalblue", // was #2563eb
    transform: "translateX(-50%)",
    zIndex: 0,
  };

  const timelineItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "60px",
  };

  const cardWrapperStyle = (isLeft) => ({
    width: "45%",
    padding: "0 20px",
    display: "flex",
    justifyContent: isLeft ? "flex-end" : "flex-start",
  });

  const connectorWrapper = {
    position: "relative",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const connector = (isLeft) => ({
    width: "60px",
    height: "2px",
    backgroundColor: "royalblue", // was #2563eb
    position: "absolute",
    ...(isLeft ? { left: "6px" } : { right: "6px" }),
  });

  const dotStyle = {
    width: "12px",
    height: "12px",
    backgroundColor: "royalblue", // was #2563eb
    borderRadius: "50%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
  };

  return (
    <div style={timelineContainer}>
      <div style={centerLine}></div>
      {items.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div key={item.key} style={timelineItemStyle}>
            {isLeft ? (
              <>
                <div style={cardWrapperStyle(true)}>
                  <Card {...item} />
                </div>
                <div style={connectorWrapper}>
                  <div style={connector(true)}></div>
                  <div style={dotStyle}></div>
                </div>
                <div style={cardWrapperStyle(false)}></div>
              </>
            ) : (
              <>
                <div style={cardWrapperStyle(true)}></div>
                <div style={connectorWrapper}>
                  <div style={connector(false)}></div>
                  <div style={dotStyle}></div>
                </div>
                <div style={cardWrapperStyle(false)}>
                  <Card {...item} />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
