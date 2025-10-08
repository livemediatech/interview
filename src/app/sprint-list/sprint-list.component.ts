import { Component } from '@angular/core';
import { SprintServiceService } from '../sprint-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sprint-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sprint-list.component.html',
  styleUrl: './sprint-list.component.scss'
})
export class SprintListComponent {
  constructor(private sprintService: SprintServiceService) {
  }
  sprintList:any=[];
  ngOnInit() {
  this.sprintList= this.sprintService.getSprintList()
  console.log( this.sprintList);
  }


}
