import React from "react";
import { useSelector } from "react-redux";
import Form1 from "../Form1";
import Form2 from "../Form2";
import Form3 from "../Form3";

const FormContainer = () => {
  const { currStep } = useSelector((state) => state.recommend);

  return (
    <div>
      {currStep === "Form1" && <Form1 />}
      {currStep === "Form2" && <Form2 />}
      {currStep === "Form3" && <Form3 />}
    </div>
  );
};

export default FormContainer;
