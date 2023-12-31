import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Training} from '../../../models/training';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.scss']
})
export class TrainingFormComponent implements OnInit {
  @Output() trainingAdded = new EventEmitter<any>();
  trainingForm: FormGroup;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<TrainingFormComponent>,
              @Inject(MAT_DIALOG_DATA) public training: Training) {
    this.trainingForm = this.fb.group({
      date: ['', Validators.required],
      // Add more form controls as needed
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.trainingForm.valid) {
      this.trainingAdded.emit(this.trainingForm.value);
      // Optionally, you can reset the form after submission
      this.trainingForm.reset();
    }
  }
}
