import { Component } from '@angular/core';
import { Training } from '../../models/training';
import { TrainingsService } from '../../services/trainings.service';

@Component({
  selector: 'app-latest-training',
  templateUrl: './latest-training.component.html',
  styleUrl: './latest-training.component.scss'
})
export class LatestTrainingComponent {
  training!: Training;
  rounds: number[] = []

  constructor(private service: TrainingsService) {
    this.service.getLatestTraining().then(data => {
      this.training = data;
      for (let i = 1; i <= this.training.numberOfRounds; i++) {
        this.rounds.push(i);
      }
    });
  }

  public onEdit(): void {
    console.log('edit');
  }

  public onDelete(): void {
    let date = new Date(this.training?.date as Date).toLocaleDateString('en-GB', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
    if (confirm(`Are you certain about deleting the training from ${date}? \n\nPlease note that this action cannot be undone`) == true) {
      console.log('delete');
    }
  }

}
