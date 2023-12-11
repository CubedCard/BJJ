import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Training} from '../models/training';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor(private http: HttpClient) {
  }

  public getAll(username: string): Promise<Training[]> {
    return new Promise(resolve => {
      this.getAllTrainings(username).subscribe(response => {
        resolve(response);
      });
    });
  }

  private getAllTrainings(username: string): Observable<Training[]> {
    return this.http.get<Training[]>(`/api/users/${username}/trainings`)
  }
}
