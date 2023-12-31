import {Training} from './training';
import {RolPartner} from './rol-partner';
import {Belt} from './belt';

export class User {
  username: string;
  trainings: Training[];
  rolPartners: RolPartner[];
  belt: Belt;

  constructor(username: string, belt: Belt) {
    this.username = username;
    this.trainings = [];
    this.rolPartners = [];
    this.belt = belt;
  }

  addTraining(training: Training): boolean {
    return this.trainings.push(training) > 0;
  }

  addRolPartner(rolPartner: RolPartner): boolean {
    return this.rolPartners.push(rolPartner) > 0;
  }
}
