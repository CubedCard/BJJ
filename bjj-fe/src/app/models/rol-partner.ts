import {Belt} from './belt';

export class RolPartner {
  name: string;
  belt: Belt;
  gender: boolean;

  constructor(name: string, belt: Belt, gender: boolean) {
    this.name = name;
    this.belt = belt;
    this.gender = gender;
  }
}
