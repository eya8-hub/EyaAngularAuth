import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisation } from '../models/utilisation.model';
const baseUrl = 'http://localhost:8081/api/utilisations';
@Injectable({
  providedIn: 'root'
})
export class UtlisationService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Utilisation[]> {
    return this.http.get<Utilisation[]>(baseUrl);
  }
  get(id: any): Observable<Utilisation> {
    return this.http.get<Utilisation>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByEmplacement(emplacement: string): Observable<Utilisation[]> {
    return this.http.get<Utilisation[]>(`${baseUrl}?emplacement=${emplacement}`);
  }
}
