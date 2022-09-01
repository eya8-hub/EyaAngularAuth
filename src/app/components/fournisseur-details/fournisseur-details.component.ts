import { Component, Input, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/_services/fournisseur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from 'src/app/models/fournisseur.model';

@Component({
  selector: 'app-fournisseur-details',
  templateUrl: './fournisseur-details.component.html',
  styleUrls: ['./fournisseur-details.component.css']
})
export class FournisseurDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentFournisseur: Fournisseur = {
    fabriquant:'',
    jurant: '',
    adresse: '',
    matricule_fiscale: '',
    telephone:'',
    fax: '',
    visAvis:''
  };
  message = '';
  constructor(private fournisseurService: FournisseurService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getFournisseur(this.route.snapshot.params["id"]);
    }
  }
  getFournisseur(id: string): void {
    this.fournisseurService.get(id)
      .subscribe({
        next: (data) => {
          this.currentFournisseur = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updateRealise(status: boolean): void {
    const data = {
      fabriquant: this.currentFournisseur.fabriquant,
      jurant: this.currentFournisseur.jurant,
      adresse: this.currentFournisseur.adresse,
      matricule_fiscale: this.currentFournisseur.matricule_fiscale,
      telephone: this.currentFournisseur.telephone,
      fax: this.currentFournisseur.fax,
      visAvis: this.currentFournisseur.visAvis


      
    };

    this.message = '';

    
}

  updateFournisseur(): void {
    this.message = '';

    this.fournisseurService.update(this.currentFournisseur.id, this.currentFournisseur)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This formation was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteFournisseur(): void {
    this.fournisseurService.delete(this.currentFournisseur.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/formations']);
        },
        error: (e) => console.error(e)
      });
  }


}
