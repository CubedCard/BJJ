import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Training } from '../../models/training';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {TrainingsService} from '../../services/trainings.service';

@Component({
  selector: 'app-new-training',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.scss'
})
export class NewTrainingComponent implements OnInit {
  trainingForm!: FormGroup;

  constructor(private fb: FormBuilder,
             private service: TrainingsService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.trainingForm = this.fb.group({
      date: [null, Validators.required],
      duration: [null, [Validators.required, Validators.min(1)]],
      numberOfRounds: [null, [Validators.required, Validators.min(1)]],
      technique: [null, Validators.required],
      notes: [null],
    });
  }

  onSubmit(): void {
    if (this.trainingForm.valid) {
      const formData = this.trainingForm.value;
      const training = new Training(
        new Date(formData.date),
        formData.duration,
        formData.numberOfRounds,
        formData.technique,
        formData.notes
      );

      console.log(training);
      this.service.addNewTraining(training).then(() => {console.log('Training added')});
    }
  }
}
