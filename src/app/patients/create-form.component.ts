import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  public patient: Patient = new Patient();
  public titulo: string = "Crear Paciente";

  constructor(private patientService: PatientService, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public create(): void{
    console.log("clicked");
    this.patientService.create(this.patient).subscribe(response=>{
      this.router.navigate(['/patients'])
    } );
  }

}
