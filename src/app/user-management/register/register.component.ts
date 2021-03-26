import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  hideRegister = false;
  message: string;

  constructor(private userservice: UserService,
              private route: ActivatedRoute,
              private router: Router, ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        name: new FormControl('', [ Validators.required]),
        email: new FormControl('', [ Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)])
      }
    );
  }

  confirmedPassword(): boolean {

    const { value: password } = this.loginForm.get('password');
    const { value: confirmPassword } = this.loginForm.get('confirmPassword');
    if (password === confirmPassword){
      return true;
      console.log('pareil');
    }else{
      console.log('PASpareil');
      return false;
    }

  }

  protected getUserForm(): User{
    return{
      username: this.loginForm.get('name').value,
      usermail: this.loginForm.get('email').value,
      userpassword: this.loginForm.get('password').value,
    };
  }

  onLogin(): void {
    if (!this.loginForm.valid) {
      console.log('nul');
    }
    if (this.confirmedPassword()){
      console.log('password match');
      this.saveUser();
      this.router.navigateByUrl('welcome');
    }else{
      this.message = 'Passwords don\'t match';
    }
  }


  saveUser(): void {
    this.userservice.save(this.getUserForm()).subscribe();
  }




}
