import {Component, OnInit} from '@angular/core';
import {TrainingsService} from '../../services/trainings.service';
import {Training} from '../../models/training';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  public trainings: Training[] = [];

  constructor(private service: TrainingsService, private router: Router) {
    this.service.getAll("Jippert").then(data => {
      this.trainings = data;
    });
  }

  ngOnInit(): void { }

  public viewLatestTraining(): void {
  }

  public editTraining(training: Training): void {
    console.log("edit");
  }

  public deleteTraining(training: Training): void {
    console.log("delete");
  }

  public changeTraining(event: any): void {
    if (event.action === 'edit') {
      this.editTraining(event.training);
    } else if (event.action === 'delete') {
      this.deleteTraining(event.training);
    }
  }

}
