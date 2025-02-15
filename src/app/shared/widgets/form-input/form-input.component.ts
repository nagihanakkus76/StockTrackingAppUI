import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-input.component.html'
})
export class FormInputComponent {
  @Input() type: string = 'text';
  @Input({ required: true }) id!: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input({ required: true }) control!: FormControl<any>;
}
