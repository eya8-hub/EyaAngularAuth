import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

import { FormationsListComponent} from './components/formations-list/formations-list.component';
import { FormationDetailsComponent } from './components/formation-details/formation-details.component';
import { AddFormationComponent } from './components/add-formation/add-formation.component';

import { FournisseurListComponent} from './components/fournisseur-list/fournisseur-list.component';
import { FournisseurDetailsComponent } from './components/fournisseur-details/fournisseur-details.component';
import { AddFournisseurComponent } from './components/add-fournisseur/add-fournisseur.component';

import { InventaireListComponent} from './components/inventaire-list/inventaire-list.component';
import {InventaireDetailsComponent } from './components/inventaire-details/inventaire-details.component';
import { AddInventaireComponent } from './components/add-inventaire/add-inventaire.component';

import { UtlisationListComponent} from './components/utilisation-list/utlisation-list.component';
import {UtlisationDetailsComponent } from './components/utilisation-details/utlisation-details.component';
import { AddUtilisationComponent } from './components/add-utilisation/add-utilisation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  //*/formations
  { path: 'formations', component: FormationsListComponent },
  { path: 'formations/:id', component: FormationDetailsComponent },
  { path: 'addFormation', component: AddFormationComponent },

  //*fournisseurs
  { path: 'fournisseurs', component: FournisseurListComponent },
  { path: 'fournisseur/:id', component: FournisseurDetailsComponent },
  { path: 'addFournisseur', component: AddFournisseurComponent },

  //*inventaire
  { path: 'inventaires', component: InventaireListComponent },
  { path: 'inventaire/:id', component: InventaireDetailsComponent },
  { path: 'addInventaire', component: AddInventaireComponent },
 

//*utilisation
{ path: 'utilisations', component: UtlisationListComponent },
{ path: 'utilisation/:id', component: UtlisationDetailsComponent },
{ path: 'addInventaire/addUTilisation', component: AddUtilisationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
