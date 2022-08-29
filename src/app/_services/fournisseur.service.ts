import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fournisseur } from '../models/fournisseur.model';
const baseUrl = 'http://localhost:8080/api/fournisseurs';
@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(baseUrl);
  }
  get(id: string): Observable<Fournisseur> {
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
  findByFabriquant(fabriquant: any): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${baseUrl}?fabriquant=${fabriquant}`);
  }
}
