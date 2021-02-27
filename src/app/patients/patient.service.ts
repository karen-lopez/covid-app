import { Injectable } from '@angular/core';
import {of, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private urlEndPoint:string = 'http://localhost:8080/api/patients';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]>{
    console.log(this.http.get<Patient[]>(this.urlEndPoint));
    return this.http.get<Patient[]>(this.urlEndPoint);
  }

  create(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.urlEndPoint, patient, {headers: this.httpHeaders});
  }
}
