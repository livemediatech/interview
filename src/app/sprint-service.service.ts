import { Injectable } from '@angular/core';
import { Story } from './story-form/story-form-interface';

@Injectable({
  providedIn: 'root'
})
export class SprintServiceService {

  constructor() { }

  storyList:Story[]=[];
  sprintList:any[]=[]

  getStories(){
    return this.storyList;
  }

  getSprintList(){
    return this.sprintList
  }
  
  
}
