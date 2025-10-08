import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { SprintServiceService } from '../sprint-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-calculator',
  standalone: true,
  imports: [ɵInternalFormsSharedModule, CommonModule, MatFormField, MatLabel, FormsModule, MatDialogModule],
  templateUrl: './sprint-calculator.component.html',
  styleUrl: './sprint-calculator.component.scss'
})
export class SprintCalculatorComponent {
  formBuilder: any;
  calculator: any;

  sprintName: String = '';
  totalPoints: Number = 0;

  constructor(private sprintService: SprintServiceService, private router: Router) {

  }



  ngOnInit() {
  }

  generateAutoSprint() {
    const allstories = this.sprintService.getStories();
    const foundArray = []
    let target: any = this.totalPoints;
    const combos = this.findCombinations(allstories, target);
    



  
   // 
  }



 findCombinations(items:any, target:any) {
    const result:any = [];
  
    function backtrack(start:any, currentCombo:any, currentSum:any) {
      if (currentSum === target) {
        result.push([...currentCombo]);
        return;
      }
      if (currentSum > target) return; // stop early if sum exceeded
      for (let i = start; i < items.length; i++) {
        currentCombo.push(items[i]);
        backtrack(i + 1, currentCombo, currentSum + items[i].storyPoints);
        currentCombo.pop(); // backtrack
      }
    }
  
    backtrack(0, [], 0);
    this.sprintService.sprintList.push(result);
    this.router.navigate(['/sprint-list'])
    return result;
  }

  getSprintList() {
    console.log(this.sprintService.getSprintList())
  }

  clearAll() {
    this.sprintService.storyList = [];
  }

  clearStories() {
    this.sprintService.sprintList = [];

  }

}
