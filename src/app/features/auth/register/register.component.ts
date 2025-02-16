import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterFormModel, RegisterRequest } from './register.request.model';
import { FormInputComponent } from "../../../shared/widgets/form-input/form-input.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterFormValidator } from './validations/register-form.validator';
import { ValidationErrorsComponent } from "../../../shared/widgets/validation-errors/validation-errors.component";
import { RegisterValidationMessage } from './validations/register.validation-message';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormInputComponent, CommonModule, RouterLink, ValidationErrorsComponent],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registerForm!: FormGroup<RegisterFormModel>
  get control() { return this.registerForm.controls; }
  formSubmitted: boolean = false;

  validationMessages = new RegisterValidationMessage();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.registerForm = new FormGroup<RegisterFormModel>(

      {
        firstName: new FormControl('', RegisterFormValidator.firstName()),
        lastName: new FormControl('', RegisterFormValidator.lastName()),

        email: new FormControl('', RegisterFormValidator.email()),
        password: new FormControl('', RegisterFormValidator.password()),
        confirmPassword: new FormControl('', RegisterFormValidator.confirmPassword()),

        phoneNumber: new FormControl('', RegisterFormValidator.phoneNumber()),
        profilePicture: new FormControl(''),
        isAgreementConfirmed: new FormControl(false, RegisterFormValidator.isAgreementConfirmed()),
      }
    );

    this.registerForm.addValidators(
      RegisterFormValidator
        .matchingPassword(this.registerForm.controls.password, this.registerForm.controls.confirmPassword)
    )
  }

  register() {
    this.formSubmitted = true;
    if (this.registerForm.invalid) return;

    const data = this.registerForm.value as RegisterRequest;
    this.authService.register(data).subscribe();
  }
}
