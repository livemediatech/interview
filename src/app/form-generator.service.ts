import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldConfig } from './field-config.model';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

constructor(private fb:FormBuilder) { }


/**
 * @description: Common generator to genrate forms based on input
 * @param {config} FieldConfig
 * @returns {FormGroup} 
 */

generateForm(config: FieldConfig[]): FormGroup {
  const group: any = {};
  config.forEach(field => {
    group[field.name] = new FormControl(field.value || '', field.validators || []);
  });
  return this.fb.group(group);
}


}
