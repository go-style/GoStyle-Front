import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitListComponent} from './produit-list/produit-list.component';
import {ProduitParNomComponent} from './produit-par-nom/produit-par-nom.component';
import {LoginComponent} from '../user-management/login/login.component';
import {FlasherComponent} from './flasher/flasher.component';

const routes: Routes = [
  { path: 'produits', component: ProduitListComponent },
  { path: 'produit', component: ProduitParNomComponent },
  { path: 'flasher', component: FlasherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitManagementRoutingModule { }
