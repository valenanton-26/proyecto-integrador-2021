export default function validateNewPassword(values) {
   
    let errors = {};
  
    //password validations
    if (!values.newPassword) {
      errors.newPassword = "Este campo es obligatorio";
    } else if (values.newPassword.length < 6) {
      errors.newPassword = "La contraseña debe tener 6 caracteres o más";
    }
    //matching passwords validations
    if (!values.newPassword2) {
      errors.newPassword2 = "Este campo es obligatorio";
    } else if (values.newPassword2 !== values.newPassword) {
      errors.newPassword2 = "Las contraseñas no coinciden";
    }
    
    return errors;
  }
  