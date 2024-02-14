import React from "react";

const ViewBmi = (props) => {
  return (
    <>
      <div>{props.bmi}</div>
      <div>{props.health}</div>
    </>
  );
};

export default ViewBmi;
