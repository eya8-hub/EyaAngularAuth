import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { FournisseurService } from 'src/app/_services/fournisseur.service';
@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {
  fournisseur:Fournisseur ={
    fabriquant:'',
    jurant: '',
    adresse: '',
    matricule_fiscale: '',
    telephone:'',
    fax: '',
    visAvis:''
    
   }
   submitted = false;
  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit(): void {}
  
  saveFournisseur(): void {
    const data = {
      fabriquant: this.fournisseur.fabriquant,
      jurant: this.fournisseur.jurant,
      adresse: this.fournisseur.adresse,
      matricule_fiscale: this.fournisseur.matricule_fiscale,
      telephone: this.fournisseur.telephone,
      fax: this.fournisseur.fax,
      visAvis: this.fournisseur.visAvis

    };
    this.fournisseurService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newFournisseur(): void {
    this.submitted = false;
    this.fournisseur = {
      fabriquant: '',
      jurant:'',
      adresse: '',
      matricule_fiscale: '',
      telephone: '',
      fax:'',
      visAvis: '',
      
    };
  }

}
