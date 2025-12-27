// src/components/Stepper.jsx

import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import PersonalInfo from "./PersonalInfo";
import Address from "./Address";
import Review from "./Review";

const Stepper = () => {
  const { state } = useContext(FormContext);

  if (state.step === 1) return <PersonalInfo />;
  if (state.step === 2) return <Address />;
  return <Review />;
};

export default Stepper;
