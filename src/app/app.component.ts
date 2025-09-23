import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { formAConfig, formBConfig } from './form-config'
import { FieldConfig } from './field-config.model';
import { FormGeneratorService } from './form-generator.service';
import { StateManagementService } from './state-management.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatCheckbox, MatButton, MatTabGroup, MatTabsModule, MatLabel, CommonModule, MatSnackBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush //Change Detection Functionality
})
export class AppComponent {


  formA!: FormGroup;
  formB!: FormGroup;

  formAConfig: FieldConfig[] = formAConfig;
  formBConfig: FieldConfig[] = formBConfig

  activeTabIndex = 0; 

  constructor(private formGenService: FormGeneratorService, private stateMngmtService: StateManagementService, private changeService: ChangeDetectorRef, private snackBar: MatSnackBar,) {

  }

  ngOnInit() {
    this.initFormA();
    this.initFormB();
  }
  /**
   * @description Form A Initialization 
   */
  initFormA() {
    this.formA = this.formGenService.generateForm(this.formAConfig)
    const savedAForm = this.stateMngmtService.getFormA();
    if (savedAForm != null) {
      this.formA?.patchValue(savedAForm)
    }
    this.formA?.valueChanges.subscribe(() => {
      this.stateMngmtService.saveFormA(this.formA)
      this.changeService.markForCheck();
    })
  }

  /**
 * @description Form B Initialization 
 */
  initFormB() {
    this.formB = this.formGenService.generateForm(this.formBConfig)
    const savedBForm = this.stateMngmtService.getFormB();
    if (savedBForm != null) {
      this.formB?.patchValue(savedBForm)
    }
    this.formB?.valueChanges.subscribe(() => {
      this.stateMngmtService.saveFormB(this.formB)
      this.changeService.markForCheck();
    })
  }

  /**
   * @description Switching between the forms are controlled here, Workes like a toggle. State management also handled here
   * @param String tab 
   */

  switchTab(index: number) {
    this.activeTabIndex = index;

    if (index === 0) {
      const savedA = this.stateMngmtService.getFormA();
      if (savedA) this.formA.patchValue(savedA);
    }

    if (index === 1) {
      const savedB = this.stateMngmtService.getFormB();
      if (savedB) this.formB.patchValue(savedB);
    }

    this.changeService.markForCheck();
  }

  /**
 * @description Called on Submission of Form A with logging the values
 * 
 */
  submitFormA() {
    console.log('Form A submitted:', this.formA.value);
    this.formA.reset();
    this.stateMngmtService.saveFormA(this.formA)
    this.snackBar.open('Data Updated for Form A!', 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  /**
 * @description Called on Submission of Form B with logging the values
 * 
 */
  submitFormB() {
    console.log('Form B submitted:', this.formB.value);
    this.formB.reset();
    this.stateMngmtService.saveFormB(this.formB)
    this.snackBar.open('Login is success!', 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  /**
* @description Tracking the form Items for *ngFor
* 
*/
  trackByFn(index: number, item: FieldConfig) {
    return item.name;
  }
}
