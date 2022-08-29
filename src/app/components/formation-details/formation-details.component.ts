import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Formation } from 'src/app/models/formation.model';
import { FormationService } from 'src/app/_services/formation.service';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {
  formations?: Formation[];
  currentFormation: Formation = {};
  currentIndex = -1;
  titre = '';
  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.retrieveFormations();
  }
  retrieveFormations(): void {
    this.formationService.getAll()
      .subscribe({
        next: (data) => {
          this.formations = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveFormations();
    this.currentFormation = {};
    this.currentIndex = -1;
  }
  setActiveFormation(formation: Formation, index: number): void {
    this.currentFormation = formation;
    this.currentIndex = index;
  }
 

  searchTitle(): void {
    this.currentFormation = {};
    this.currentIndex = -1;
    this.formationService.findByTitle(this.titre)
      .subscribe({
        next: (data) => {
          this.formations = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
