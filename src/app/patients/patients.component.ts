import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  public patients?:Patient[];

  constructor(private patientService: PatientService) { 
    this.patientService.getPatients().subscribe(
      patients => this.patients = patients
    )
  }

  ngOnInit(): void {
  }

}
