import { Component } from '@angular/core';
import { SprintServiceService } from '../sprint-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-storylist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './storylist.component.html',
  styleUrl: './storylist.component.scss'
})
export class StorylistComponent {
  stortList:any;
constructor( private storyservice:SprintServiceService){}


ngOnInit() {
 this.getList();
}

  getList(){
    this.stortList = this.storyservice.getStories();
  }
}
