import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  name: string;
  type: 'text' | 'email' | 'password' | 'checkbox';
  label?: string;
  value?: any;
  validators?: ValidatorFn[];
}