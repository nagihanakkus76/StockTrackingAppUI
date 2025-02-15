import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterFormModel, RegisterRequest } from './register.request.model';
import { FormInputComponent } from "../../../shared/widgets/form-input/form-input.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormInputComponent, CommonModule, RouterLink],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registerForm!: FormGroup<RegisterFormModel>

  constructor(private authService: AuthService) { }
  ngOnInit(): void {

    this.registerForm = new FormGroup<RegisterFormModel>({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),

      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),

      phoneNumber: new FormControl(''),
      profilePicture: new FormControl(''),
    });
  }

  register() {
    if (this.registerForm.invalid) return;
    const data = this.registerForm.value as RegisterRequest;
    this.authService.register(data).subscribe();
  }
}
