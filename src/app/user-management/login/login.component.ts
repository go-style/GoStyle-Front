import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = false;
  foundUser: User ;
  mailfromForm: string;
  mdpfromForm: string;

  ok = false;


  constructor(private userservice: UserService,
              route: ActivatedRoute,
              router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [ Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)])
      }
    );
  }
  onLogin(): void {
    if (!this.loginForm.valid) {
      console.log('nul');
    }
    this.getUser();
    console.log('youpi');
  }

  getUser(): void {

    this.mailfromForm = this.loginForm.get('email').value ;
    this.mdpfromForm = this.loginForm.get('password').value ;

    this.userservice.getUser(this.mailfromForm, this.mdpfromForm ).subscribe(
      dataUser => this.foundUser = dataUser, () => {console.log('NOP'); }
    );

  }


}
