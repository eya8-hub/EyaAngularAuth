import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fournisseur } from '../models/fournisseur.model';
const baseUrl = 'http://localhost:8081/api/fournisseurs';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(baseUrl);
  }
  get(id: any): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${baseUrl}/${id}`);
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
  findByFournisseur(fournisseur: string): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${baseUrl}?formateur=${fournisseur}`);
  }
}
