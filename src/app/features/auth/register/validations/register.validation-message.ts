import { ValidationType } from "../../../../enums/validation-type.enum"
import { ValidationMessageHelper } from "../../../../helpers/validation-message.helper"
import { ValidationMessageModel } from "../../../../models/validation-message.model"

export class RegisterValidationMessage {

  fistName: ValidationMessageModel[] = [
    {
      type: ValidationType.Required,
      message: ValidationMessageHelper.required('İsim')
    },
    {
      type: ValidationType.Minlength,
      message: ValidationMessageHelper.minlength('İsim', 3)
    }
  ]

  lastName: ValidationMessageModel[] = [
    {
      type: ValidationType.Required,
      message: ValidationMessageHelper.required('Soyisim')
    },
    {
      type: ValidationType.Minlength,
      message: ValidationMessageHelper.minlength('Soyisim', 2)
    }
  ]

  email: ValidationMessageModel[] = [
    {
      type: ValidationType.Required,
      message: ValidationMessageHelper.required('Email')
    },
    {
      type: ValidationType.Email,
      message: ValidationMessageHelper.email()
    }
  ]

  password: ValidationMessageModel[] = [
    {
      type: ValidationType.Required,
      message: ValidationMessageHelper.required('Şifre')
    },
    {
      type: ValidationType.Minlength,
      message: ValidationMessageHelper.minlength('Şifre', 6)
    }
  ]

  confirmPassword: ValidationMessageModel[] = [
    {
      type: ValidationType.Required,
      message: ValidationMessageHelper.required('Şifre tekrarı')
    },
    {
      type: ValidationType.NotTheSame,
      message: ValidationMessageHelper.notTheSame()
    }
  ]

  phoneNumber: ValidationMessageModel[] = [
    {
      type: ValidationType.Pattern,
      message: ValidationMessageHelper.pattern('Örnek: 555 555 55 55')
    }
  ]

}
