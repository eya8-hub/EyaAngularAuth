import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation.model';
import { FormationService } from 'src/app/_services/formation.service';
@Component({
  selector: 'app-formations-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationsListComponent implements OnInit {
  formations?: Formation[];
  currentFormation: Formation = {};
  currentIndex = -1;
  title = '';
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
  setActiveFormation(Formation: Formation, index: number): void {
    this.currentFormation = Formation;
    this.currentIndex = index;
  }
  
  searchTitle(): void {
    this.currentFormation = {};
    this.currentIndex = -1;
    this.formationService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.formations = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}