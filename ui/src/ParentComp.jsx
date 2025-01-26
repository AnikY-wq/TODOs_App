import React from "react";

export const ParentComp = ({ children }) => {
  return (
    <>
      <div className="banner header">
        <h1>Let's Plan your Day</h1>
      </div>
      {children}
      <div className="banner footer">
        <h4>
          Contact us <a href="">here!</a>
        </h4>
      </div>
    </>
  );
};
