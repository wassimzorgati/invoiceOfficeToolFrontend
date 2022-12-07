import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {User} from "@app/_models/user";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiEndpoints} from "@app/api/enums/api-endpoints.enum";
import {ApiService} from "@app/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly user$$ = new BehaviorSubject<User | null>(null);
  public readonly user$ = this.user$$.asObservable();

  constructor(public jwtHelper: JwtHelperService,
              private readonly httpClient: HttpClient,
              private readonly apiService: ApiService,) {

  }

  public isAuthenticated(): boolean {

    const token : string = localStorage.getItem('token') || '';
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  public login(email: string, loginPassword: string): Observable<User> {
    const data = { email, loginPassword };

    return this.httpClient.post<User>(this.apiService.url(ApiEndpoints.API_LOGIN_POST_LOGIN_USER), data).pipe(
      tap((user: User) => {
        this.persistData(user);
      })
    );
  }

  private persistData(user: User) {
    this.user$$.next(user);
  }
}
