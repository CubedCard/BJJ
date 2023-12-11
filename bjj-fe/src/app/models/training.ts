export class Training {
  date: Date;
  duration: number;
  numberOfRounds: number;
  technique: string;
  notes: string;

  constructor(date: Date, duration: number, numberOfRounds: number, technique: string, notes: string) {
    this.date = date;
    this.duration = duration;
    this.numberOfRounds = numberOfRounds;
    this.technique = technique;
    this.notes = notes;
  }
}
