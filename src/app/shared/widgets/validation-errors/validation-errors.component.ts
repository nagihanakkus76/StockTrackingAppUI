import { Component, Input } from '@angular/core';
import { ValidationErrorItemComponent } from '../validation-error-item/validation-error-item.component';
import { FormControl } from '@angular/forms';
import { ValidationMessageModel } from '../../../models/validation-message.model';

@Component({
  selector: 'app-validation-errors',
  standalone: true,
  imports: [ValidationErrorItemComponent],
  templateUrl: './validation-errors.component.html',
  styleUrl: './validation-errors.component.css'
})
export class ValidationErrorsComponent {
  @Input() validationMessages!: ValidationMessageModel[];
  @Input() control!: FormControl<string | null>;
  isInvalid = (fc: FormControl) => fc.invalid && (fc.dirty || fc.touched)
}
