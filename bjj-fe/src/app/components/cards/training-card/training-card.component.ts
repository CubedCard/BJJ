import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { Training } from '../../../models/training';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss']
})
export class TrainingCardComponent implements OnInit {
  @Input() training: Training | undefined = undefined;
  @Output() newItemEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  public onEdit(): void {
    this.newItemEvent.emit({action: 'edit', training: this.training});
  }

  public onDelete(): void {
    this.newItemEvent.emit({action: 'delete', training: this.training});
  }

}
