import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { AddFormationComponent } from './components/add-formation/add-formation.component';
import { FormationDetailsComponent } from './components/formation-details/formation-details.component';
import { FormationsListComponent } from './components/formations-list/formations-list.component';
import { AddFournisseurComponent } from './components/add-fournisseur/add-fournisseur.component';
import { FournisseurDetailsComponent } from './components/fournisseur-details/fournisseur-details.component';
import { FournisseurListComponent } from './components/fournisseur-list/fournisseur-list.component';
import { AddInventaireComponent } from './components/add-inventaire/add-inventaire.component';
import { InventaireListComponent } from './components/inventaire-list/inventaire-list.component';
import { InventaireDetailsComponent } from './components/inventaire-details/inventaire-details.component';
import { AddUtilisationComponent } from './components/add-utilisation/add-utilisation.component';
import { UtlisationDetailsComponent } from './components/utilisation-details/utlisation-details.component';
import { UtlisationListComponent } from './components/utilisation-list/utlisation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    AddFormationComponent,
    FormationDetailsComponent,
    FormationsListComponent,
    AddFournisseurComponent,
    FournisseurDetailsComponent,
    FournisseurListComponent,
    AddInventaireComponent,
    InventaireListComponent,
    InventaireDetailsComponent,
    AddUtilisationComponent,
    UtlisationDetailsComponent,
    UtlisationListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
