import { Component, OnInit,ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { Formation } from 'src/app/models/formation.model';
import { FormationService } from 'src/app/_services/formation.service';
import{MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataSource } from '@angular/cdk/collections';
@Component({
  selector: 'app-formations-list',
  templateUrl: './formations-list.component.html',
  styleUrls: ['./formations-list.component.css']
})
export class FormationsListComponent implements OnInit {
  
  //@ViewChild('paginator')
  //paginator!: MatPaginator;
  
  formations?: Formation[];
  currentFormation: Formation = {};
  currentIndex = -1;
  formateur = '';
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  constructor( private formationService: FormationService) { }

  ngOnInit(): void {
    this.retrieveFormations();
  }
  getRequestParams(searchTitre: string, page: number, pageSize: number): any {
    let params: any = {};
    if (searchTitre) {
      params[`titre`] = searchTitre;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
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
  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveFormations();
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveFormations();
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



  searchFormateur(): void {
    this.currentFormation = {};
    this.currentIndex = -1;

    this.formationService.findByFormateur(this.formateur)
      .subscribe({
        next: (data) => {
          this.formations = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
