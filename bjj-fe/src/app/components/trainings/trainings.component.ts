import {Component, OnInit} from '@angular/core';
import {TrainingsService} from '../../services/trainings.service';
import {Training} from '../../models/training';
import {MatDialog} from '@angular/material/dialog';
import {TrainingFormComponent} from './training-form/training-form.component';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  showForm = false;
  public trainings: Training[] = []

  constructor(private service: TrainingsService,
              public dialog: MatDialog) {
    this.service.getAll('Jippert').then(trainings => {
      this.trainings = trainings;
    });
  }

  ngOnInit(): void {
  }

  toggleForm() {
    this.showForm = !this.showForm;
    if (this.showForm) this.openDialog();
  }

  private openDialog(): void {
    let training: Training = this.trainings[0]
    const dialogRef = this.dialog.open(TrainingFormComponent, {
      width: '250px',
      data: {
        date: training.date,
        duration: training.duration,
        numberOfRounds: training.numberOfRounds,
        technique: training.technique,
        notes: training.notes
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.trainings.push(result);
      this.toggleForm();
    });
  }

  onTrainingAdded(training: any) {
    this.trainings.push(training);
    this.toggleForm(); // Hide the form after adding a training (you can adjust this based on your UX)
  }
}
