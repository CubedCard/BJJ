import { Input, Component, OnInit } from '@angular/core';
import { Training } from '../../../models/training';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss']
})
export class TrainingCardComponent implements OnInit {
  @Input() training: Training | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public onEdit(): void {
    console.log('edit');
  }

  public onDelete(): void {
    console.log('delete');
  }

}
