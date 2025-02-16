import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {
  @Input() type: string = 'text';
  @Input({ required: true }) id!: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input({ required: true }) control!: FormControl<any>;
  @Input() prefix?: string;

}
