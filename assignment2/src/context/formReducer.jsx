// src/context/formReducer.js

const savedData = JSON.parse(localStorage.getItem("formData"));

export const initialState = {
  step: 1,
  formData: savedData || {
    name: "",
    email: "",
    city: "",
    state: ""
  }
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD": {
      const updatedForm = {
        ...state.formData,
        [action.field]: action.value
      };

      localStorage.setItem("formData", JSON.stringify(updatedForm));

      return {
        ...state,
        formData: updatedForm
      };
    }

    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };

    case "PREVIOUS_STEP":
      return { ...state, step: state.step - 1 };

    case "RESET_FORM":
      localStorage.removeItem("formData");
      return initialState;

    default:
      return state;
  }
};
