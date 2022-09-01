import { Component, OnInit } from '@angular/core';
import { Utilisation } from 'src/app/models/utilisation.model';
import { UtlisationService } from 'src/app/_services/utlisation.service';
@Component({
  selector: 'app-add-utilisation',
  templateUrl: './add-utilisation.component.html',
  styleUrls: ['./add-utilisation.component.css']
})
export class AddUtilisationComponent implements OnInit {
  utilisation: Utilisation = {
    emplacement: '',
    utilisation: '',
    responsable: '',
    emplacementDoc:''
  };
  submitted = false;
  constructor(private utisationService: UtlisationService) { }

  ngOnInit(): void {
  }
  saveUtilisation(): void {
    const data = {
      emplacement: this.utilisation.emplacement,
      utilisation: this.utilisation.utilisation,
      responsable:this.utilisation.responsable,
      emplacementDoc:this.utilisation.emplacementDoc,
    };

    this.utisationService.create(data)
      .subscribe({
        next: () => {

          this.submitted = true;
        },

      });
  }
  newUtilisation(): void {
    this.submitted = false;
    this.utilisation = {
      emplacement: '',
    utilisation: '',
    responsable: '',
    emplacementDoc:''
    };
  }


}
