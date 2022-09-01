import { Component, Input, OnInit } from '@angular/core';
import { FormationService } from 'src/app/_services/formation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation.model';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentFormation: Formation = {
  titre:'',
  date: new Date,
  realise: false,
  formateur: '',
  personnels:'',
  description: ''
  
  };
  message = '';
  constructor(private formationService: FormationService,
    private route: ActivatedRoute,
    private router: Router) { }

  
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getFormation(this.route.snapshot.params["id"]);
    }
  }
  getFormation(id: string): void {
    this.formationService.get(id)
      .subscribe({
        next: (data) => {
          this.currentFormation = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateRealise(status: boolean): void {
    const data = {
      titre: this.currentFormation.titre,
      Date:this.currentFormation.date,
      Realise: status,
      formateur:this.currentFormation.formateur,
      personnel:this.currentFormation.personnels,
      description: this.currentFormation.description,

      
    };

    this.message = '';

    this.formationService.update(this.currentFormation.id, data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.currentFormation.realise = status;
        this.message = res.message ? res.message : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
}

  updateFormation(): void {
    this.message = '';

    this.formationService.update(this.currentFormation.id, this.currentFormation)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This formation was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteFormation(): void {
    this.formationService.delete(this.currentFormation.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/formations']);
        },
        error: (e) => console.error(e)
      });
  }


}
