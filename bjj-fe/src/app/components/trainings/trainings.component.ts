import {Component, OnInit} from '@angular/core';
import {TrainingsService} from '../../services/trainings.service';
import {Training} from '../../models/training';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  public trainings: Training[] = [];

  constructor(private service: TrainingsService) {
    this.service.getAll("Jippert").then(data => {
      this.trainings = data;
    });
  }

  ngOnInit(): void { }

  public viewLatestTraining(): void {
  }

}
