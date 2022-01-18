import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Form</h1>
      <button onClick={() => navigate("/")}>Submit</button>
    </div>
  );
};

export default Form;
