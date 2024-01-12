import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrainingsComponent} from './components/trainings/trainings.component';
import {NewTrainingComponent} from './components/new-training/new-training.component';

const routes: Routes = [
  {path: 'trainings', component: TrainingsComponent},
  {path: 'trainings/new-training', component: NewTrainingComponent},
  {path: '**', redirectTo: 'trainings'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
