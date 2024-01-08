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
    let date = new Date(this.training?.date as Date).toLocaleDateString('en-GB', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
    if (confirm(`Are you certain about deleting the training from ${date}? \n\nPlease note that this action cannot be undone`) == true) {
      this.newItemEvent.emit({action: 'delete', training: this.training});
    }
  }

}
