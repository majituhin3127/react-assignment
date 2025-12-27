// src/components/PersonalInfo.jsx

import React, { useContext, useState } from "react";
import { TextField, Button } from "@mui/material";
import * as yup from "yup";
import { FormContext } from "../context/FormContext";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required")
});

const PersonalInfo = () => {
  const { state, dispatch } = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const handleNext = async () => {
    try {
      await schema.validate(state.formData, { abortEarly: false });
      dispatch({ type: "NEXT_STEP" });
    } catch (err) {
      const newErrors = {};
      err.inner.forEach(e => (newErrors[e.path] = e.message));
      setErrors(newErrors);
    }
  };

  return (
    <>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={state.formData.name}
        error={!!errors.name}
        helperText={errors.name}
        onChange={e =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "name",
            value: e.target.value
          })
        }
      />

      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={state.formData.email}
        error={!!errors.email}
        helperText={errors.email}
        onChange={e =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "email",
            value: e.target.value
          })
        }
      />

      <Button variant="contained" onClick={handleNext}>
        Next
      </Button>
    </>
  );
};

export default PersonalInfo;
