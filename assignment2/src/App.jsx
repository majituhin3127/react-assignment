// src/App.jsx

import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import FormProvider from "./context/FormContext";
import Stepper from "./components/Stepper";

const App = () => {
  return (
    <FormProvider>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
          <Typography variant="h5" mb={2}>
            Multi-Step Form
          </Typography>
          <Stepper />
        </Paper>
      </Container>
    </FormProvider>
  );
};

export default App;
