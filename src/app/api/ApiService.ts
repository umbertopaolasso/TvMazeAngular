// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDatiApi(name: string): Observable<Show[]> {
    return this.http.get<Show[]>(
      `https://api.tvmaze.com/search/shows?q=${name}`
    );
  }

  getDetailsById(id: number) {
    return this.http.get<ShowDetails>(`https://api.tvmaze.com/shows/${id}`);
  }
}
