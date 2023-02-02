import { useState, useEffect, useContext } from "react";

import userLoginContext from "../../../context/userLoginContext";

const useChangePasswordForm = (callback, validateNewPassword) => {
  const [values, setValues] = useState({
    newPassword: "",
    newPassword2: "",
  });

  const { setUserLogin } = useContext(userLoginContext);

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateNewPassword(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      localStorage.setItem("userLogin", JSON.stringify(values));
      
      setUserLogin("true");

      callback();
    }
  }, [errors, isSubmitting, callback, values, setUserLogin]);

  return { handleChange, values, handleSubmit, errors };
};

export default useChangePasswordForm;
