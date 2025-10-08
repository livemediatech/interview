import { Routes } from '@angular/router';
import { StoryFormComponent } from './story-form/story-form.component';
import { StorylistComponent } from './storylist/storylist.component';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';
import { SprintListComponent } from './sprint-list/sprint-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'createStory', pathMatch: 'full' },
    { path: 'createStory', component: StoryFormComponent },
    { path: 'viewStory', component: StorylistComponent },
    { path: 'calculator', component: SprintCalculatorComponent },
    { path: 'sprint-list', component:SprintListComponent  },
];
