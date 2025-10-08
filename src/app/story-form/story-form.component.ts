import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from "@angular/forms";
import { MatLabel, MatFormField } from "@angular/material/form-field";
import { SprintServiceService } from '../sprint-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-story-form',
  standalone: true,
  imports: [ɵInternalFormsSharedModule, MatLabel, MatFormField, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './story-form.component.html',
  styleUrl: './story-form.component.scss'
})
export class StoryFormComponent {
  stortList:any;
  constructor(private sprintService:SprintServiceService){}

  storyForm: FormGroup = new FormGroup({
    storyName: new FormControl(''),
    storyPoints: new FormControl(''),
    storyDescription: new FormControl(''),
  })
  formBuilder: any;
  ngOnInit() {
    this.storyForm = this.formBuilder.group(
      {
        storyName: ['', Validators.required],
        storyPoints: ['', Validators.required],
        storyDescription: ['', Validators.required]
      });
  }
  addStory() {
    if(this.storyForm.valid){
      console.log(this.storyForm)
      if(!this.checkDuplicate(this.storyForm.value.storyName)){
        this.sprintService.storyList.push(this.storyForm.value);
        alert('Data Added Successfully')
        this.storyForm.reset()
      }  
    else{
     alert('Already Exists')
    }
  }
    
  }

  getlist(){
    this.stortList=this.sprintService.getStories();
  }


  checkDuplicate(storyname:string){
    this.stortList=this.sprintService.getStories();
    const isDuplicate = this.stortList.some(
      (      item: { storyName: string; }) => item.storyName.toLowerCase() === storyname.toLowerCase()
    );
    return isDuplicate;
  }


}
