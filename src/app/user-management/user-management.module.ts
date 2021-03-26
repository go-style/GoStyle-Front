import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserComponent } from './user/user.component';



import { FrontpageComponent } from './frontpage/frontpage.component';
import {AppMaterialModule} from '../app-material.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [UserComponent, FrontpageComponent, ToolbarComponent, LoginComponent, RegisterComponent],
    exports: [
        UserComponent,
        FrontpageComponent,
        LoginComponent,
        RegisterComponent,
        ToolbarComponent,

    ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    AppMaterialModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,

  ]
})
export class UserManagementModule { }
