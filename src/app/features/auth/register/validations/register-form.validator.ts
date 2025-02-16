import { AbstractControl, FormControl, Validators } from "@angular/forms";

export class RegisterFormValidator {

  static firstName() {
    var validators = [Validators.required, Validators.minLength(3)]
    return validators;
  }

  static lastName() {
    var validators = [Validators.required, Validators.minLength(2)]
    return validators;
  }

  static email() {
    var validators = [Validators.required, Validators.email]
    return validators;
  }

  static password() {
    var validators = [Validators.required, Validators.minLength(6)]
    return validators;
  }

  static confirmPassword() {
    var validators = [Validators.required, Validators.minLength(6)]
    return validators;
  }

  static phoneNumber() {
    var validators = [Validators.pattern(/^(?:\+90)?(?:\d{10})$/)]
    return validators;
  }

  static isAgreementConfirmed() {
    var validators = [Validators.requiredTrue]
    return validators;
  }

  static matchingPassword(password: FormControl, confirmPassword: FormControl) {
    return (controls: AbstractControl) => {
      if (controls) {
        const _password = password.value;
        const _confirmPassword = confirmPassword.value;

        if (_password !== _confirmPassword) {
          confirmPassword?.setErrors({ not_the_same: true });
          return { mismatchedPassword: true }
        }
      }

      return null;
    }
  }
}
