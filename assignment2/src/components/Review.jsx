// src/components/Review.jsx

import React, { useContext } from "react";
import { Button, Typography } from "@mui/material";
import { FormContext } from "../context/FormContext";

const Review = () => {
  const { state, dispatch } = useContext(FormContext);

  const handleSubmit = () => {
    console.log("Submitted Data:", state.formData);
    alert("Form Submitted Successfully!");
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <>
      <Typography>Name: {state.formData.name}</Typography>
      <Typography>Email: {state.formData.email}</Typography>
      <Typography>City: {state.formData.city}</Typography>
      <Typography>State: {state.formData.state}</Typography>

      <Button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Back
      </Button>
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

export default Review;
