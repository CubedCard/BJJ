import {Component, OnInit} from '@angular/core';
import {TrainingsService} from '../../services/trainings.service';
import {Training} from '../../models/training';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  public trainings: Training[] = [];

  constructor(private service: TrainingsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.service.getAll('Jippert').then(data => {
      this.trainings = data;
      this.trainings.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    });
  }

  ngOnInit(): void {
  }

  public viewLatestTraining(): void {
  }

  public editTraining(training: Training): void {
    console.log('edit');
  }

  public deleteTraining(training: Training): void {
    this.service.deleteTraining('Jippert', training).then(() => {
      this.trainings = this.trainings.filter(t => t.date !== training.date);
    });
  }

  public changeTraining(event: any): void {
    if (event.action === 'edit') {
      this.editTraining(event.training);
    } else if (event.action === 'delete') {
      this.deleteTraining(event.training);
    }
  }

  logNewTraining(): void {
    this.router.navigate(['new-training'], {relativeTo: this.activatedRoute});
  }
}
