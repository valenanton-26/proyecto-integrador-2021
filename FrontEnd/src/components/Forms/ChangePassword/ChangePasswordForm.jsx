import React from "react";
import useLoginForm from "./useLoginForm";
import validate from "./loginValidations";
import "../../Forms/Forms.css";

const ChangePasswordForm = ({ submitChangePasswordForm }) => {
  const { handleChange, values, handleSubmit, errors } = useLoginForm(
    // submitLoginForm,
    validate
  );

  return (
    <div className="form-container">
      <form className="Form" onSubmit={handleSubmit} noValidate>
        <h1 className="title">Ingresa tu nueva contraseña</h1>

        <label htmlFor="newPassword" className="form-label">
          Correo electrónico
        </label>
        <input
          id="newPassword"
          type="password"
          name="newPassword"
          className="form-input form-input-email"
          value={values.newPassword}
          onChange={handleChange}
        />
        {errors.newPassword && (
          <p className="input-error">{errors.newPassword}</p>
        )}

        <label htmlFor="newPassword2" className="form-label">
          Contraseña
        </label>
        <input
          id="newPassword2"
          type="password"
          name="newPassword2"
          className="form-input form-input-password"
          value={values.newPassword2}
          onChange={handleChange}
        />

        {errors.newPassword2 && (
          <p className="input-error">{errors.newPassword2}</p>
        )}

        <button type="submit" className="form-input-btn">
          Enviar
        </button>
      </form>
      
    </div>
  );
};

export default ChangePasswordForm;
