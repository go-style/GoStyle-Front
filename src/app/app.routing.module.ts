import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './user-management/login/login.component';
import {RegisterComponent} from './user-management/register/register.component';
import {UserComponent} from './user-management/user/user.component';
import {FrontpageComponent} from './user-management/frontpage/frontpage.component';
import {ProduitListComponent} from './produit-management/produit-list/produit-list.component';
import {ProduitParNomComponent} from './produit-management/produit-par-nom/produit-par-nom.component';
import {FlasherComponent} from './produit-management/flasher/flasher.component';

const routes: Routes = [
  { path: 'user', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'welcome', component: FrontpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produits', component: ProduitListComponent },
  { path: 'produit', component: ProduitParNomComponent },
  { path: '**', component: LoginComponent },
  { path: 'flasher', component: FlasherComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
