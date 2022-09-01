import { Component, OnInit } from '@angular/core';
import { Inventaire } from 'src/app/models/inventaire.model';
import { Utilisation } from 'src/app/models/utilisation.model';
import { UtlisationService } from 'src/app/_services/utlisation.service';

import { InventaireService } from 'src/app/_services/inventaire.service';
@Component({
  selector: 'app-add-inventaire',
  templateUrl: './add-inventaire.component.html',
  styleUrls: ['./add-inventaire.component.css']
})
export class AddInventaireComponent implements OnInit {
  inventaire:Inventaire={
    reference: '',
    type :'Achat',
    marque: '',
    numSerie:'',
    dateAquis:new Date,
    dateMEP:new Date,
    dateFinAquis:new Date,
    accessoire:'',
    
    
  };
  utilisation:Utilisation={
    emplacement:'',
    utilisation:'',
    responsable:'',
    emplacementDoc:''


 }
  submitted = false;
  
  ngOnInit(): void {}
 constructor (private inventaireService: InventaireService , private utilisationService:UtlisationService){}
 saveInventaire(): void {
  const data = {
    reference: this.inventaire.reference,
    type:this.inventaire.type,
    marque:this.inventaire.marque,
    numSerie:this.inventaire.numSerie,
    dateAquis:this.inventaire.dateAquis,
    dateMAE:this.inventaire.dateMEP,
    dateFin:this.inventaire.dateFinAquis,
    accessoires:this.inventaire.accessoire,


    Utilisation: this.inventaire.utilisation
  };
  
  this.inventaireService.create(data)
      .subscribe({
        next: () => {

          this.submitted = true;
        },

      });
  }
  newInventaire(): void {
    this.submitted = false;
    this.inventaire= {
      reference: '',
    type: '',
    marque: '',
    numSerie:'',
    dateAquis:new Date,
    dateMEP:new Date,
    dateFinAquis:new Date,
    accessoire:'',
    
      
    };}
    newUtilisation(): void {
      this.submitted = false;
    this.utilisation={
      emplacement:'',
      utilisation:'',
     responsable:'',
      emplacementDoc:''
    }

  

}}
