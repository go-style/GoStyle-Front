import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProduitListComponent } from './produit-management/produit-list/produit-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ProduitParNomComponent } from './produit-management/produit-par-nom/produit-par-nom.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProduitManagementModule } from './produit-management/produit-management.module';
import {UserManagementModule} from './user-management/user-management.module';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user-management/user/user.component';
import {LoginComponent} from './user-management/login/login.component';
import {RegisterComponent} from './user-management/register/register.component';
import {AppRoutingModule} from './app.routing.module';
import {FlasherComponent} from './produit-management/flasher/flasher.component';
import {NgQrScannerModule} from 'angular2-qrscanner';
import {QRCodeModule} from 'angularx-qrcode';



const routes: Routes = [
  {path: 'produits', component: ProduitListComponent},
  { path: 'user', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
  {path: 'flasher', component: FlasherComponent },

];

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [
    AppComponent,
    FlasherComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ProduitManagementModule,
    UserManagementModule,
    RouterModule,
    AppRoutingModule,
    NgQrScannerModule,

    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
