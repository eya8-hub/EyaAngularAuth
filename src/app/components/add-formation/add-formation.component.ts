import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation.model';
import { FormationService } from 'src/app/_services/formation.service';
@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
 formation:Formation ={
  titre:'',
  date: new Date,
  Realise: false,
  formateur: '',
  Personnel:'',
  description: '',
  
 }
 submitted = false;
  constructor( private formationService: FormationService) { }

  ngOnInit(): void {}
    saveFormation(): void {
      const data = {
        title: this.formation.titre,
        date: this.formation.date,
        realise: this.formation.Realise,
        formateur: this.formation.formateur,
        personnels: this.formation.Personnel,
        description: this.formation.description
      };
      this.formationService.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e)
        });
    }
    newFormation(): void {
      this.submitted = false;
      this.formation = {
        titre: '',
        date: new Date,
        Realise: false,
        formateur: '',
        Personnel:'',
        description: '',
        
      };
    }
  }

