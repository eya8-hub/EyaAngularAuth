import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from '../models/formation.model';
const baseUrl = 'http://localhost:8081/api/formations';



@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Formation[]> {
    return this.http.get<Formation[]>(baseUrl);
  }
  get(id: any): Observable<Formation> {
    return this.http.get<Formation>(`${baseUrl}/${id}`);
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
  findByFormateur(formateur: string): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${baseUrl}?formateur=${formateur}`);
  }
}
