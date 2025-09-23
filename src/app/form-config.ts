
import {  Validators } from '@angular/forms';
import { FieldConfig } from './field-config.model';

export const formAConfig: FieldConfig[] = [
    { name: 'fullName', type: 'text', label: 'Full Name', value: '', validators: [Validators.required] },
    { name: 'email', type: 'email', label: 'Email', value: '', validators: [Validators.required, Validators.email] },
    { name: 'subscribe', type: 'checkbox', label: 'Subscribe', value: false }
  ];
  
  export const formBConfig: FieldConfig[] = [
    { name: 'email', type: 'email', label: 'Email', value: '', validators: [Validators.required, Validators.email] },
    { name: 'password', type: 'password', label: 'Password', value: '', validators: [Validators.required, Validators.minLength(6)] },
    { name: 'rememberMe', type: 'checkbox', label: 'Remember Me', value: false }
  ];