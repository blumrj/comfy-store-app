import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitButton = ({ text = "submit" }) => {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block capitalize mt-4"
      disabled={isSubmitting}
    >
      {isSubmitting ? "submitting" : text}
    </button>
  );
};

export default SubmitButton;
