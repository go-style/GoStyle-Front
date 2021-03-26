import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {User} from '../model/user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static users: User[];
  private usersUrl = 'http://localhost:8080/go/users';
  private userUrl = 'http://localhost:8080/go/user';
  private httpOptions = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }



  getUser(usermail: string, mdp: string): Observable<User>{
    console.log('mdp' + mdp);
    const params = new HttpParams()
      .set('mdp', mdp);
    return this.http.get<User>(this.userUrl + '/' + usermail, {params});
  }

  save(user: User): Observable<User> {
    // Ajout dans la liste
    return this.http.post<User>(this.userUrl, user, {
      headers: this.httpOptions
    });

  }


}
