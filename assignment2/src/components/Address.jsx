// src/components/Address.jsx

import React, { useContext, useState } from "react";
import { TextField, Button } from "@mui/material";
import * as yup from "yup";
import { FormContext } from "../context/FormContext";

const schema = yup.object({
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required")
});

const Address = () => {
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
        label="City"
        fullWidth
        margin="normal"
        value={state.formData.city}
        error={!!errors.city}
        helperText={errors.city}
        onChange={e =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "city",
            value: e.target.value
          })
        }
      />

      <TextField
        label="State"
        fullWidth
        margin="normal"
        value={state.formData.state}
        error={!!errors.state}
        helperText={errors.state}
        onChange={e =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "state",
            value: e.target.value
          })
        }
      />

      <Button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Back
      </Button>
      <Button variant="contained" onClick={handleNext}>
        Next
      </Button>
    </>
  );
};

export default Address;
