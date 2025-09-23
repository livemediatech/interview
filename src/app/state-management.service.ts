import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {

  constructor() { }
  private formAState = new BehaviorSubject<any>(null);
  private formBState = new BehaviorSubject<any>(null);

  formAState$= this.formAState.asObservable();
  formBState$= this.formBState.asObservable();

  /**
   * @description Save Form A State
   * @param form:FormGroup
   */
  saveFormA(form:FormGroup){
    this.formAState.next(form.value)
  }

    /**
   * @description Save Form B State
   * @param form:FormGroup
   */
  saveFormB(form:FormGroup){
    this.formBState.next(form.value)
  }

    /**
   * @description Get Data for form A State
   * @returns {}
   */
  getFormA(){
    return this.formAState.getValue()
  }

/**
 * @description Get Data for form B State
 * @returns {}
 */
  getFormB(){
    return this.formBState.getValue()
  }
}
