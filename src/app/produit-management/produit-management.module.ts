import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProduitListComponent} from './produit-list/produit-list.component';
import {ProduitParNomComponent} from './produit-par-nom/produit-par-nom.component';
import {ProduitManagementRoutingModule} from './produit-management-routing.module';
import {AppMaterialModule} from '../app-material.module';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LayoutModule} from '@angular/cdk/layout';
import {ReactiveFormsModule} from '@angular/forms';
import { FlasherComponent } from './flasher/flasher.component';
import {NgQrScannerModule} from 'angular2-qrscanner';


@NgModule({
  declarations: [ProduitListComponent, ProduitParNomComponent],
  exports: [
    ProduitListComponent,
    NgQrScannerModule,
  ],
    imports: [
        CommonModule,
        ProduitManagementRoutingModule,
        AppMaterialModule,
        MatButtonModule,
        HttpClientModule,
        MatCardModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatToolbarModule,
        LayoutModule,
        ReactiveFormsModule,
        NgQrScannerModule,

    ]
})

export class ProduitManagementModule { }
