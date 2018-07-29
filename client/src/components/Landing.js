import React from "react";
import ninja from "../assets/landing.jpg";
const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>SurveyNinja</h1>
        <img
          src={ninja}
          alt="Welcome"
          style={{ height: "45px", width: "45px" }}
        />
      </div>
      Collect feedback from your users!
    </div>
  );
};

export default Landing;
