import {Injectable} from '@angular/core'
import {RegisterRequestInterface} from '../types/registerRequest.interface'
import {map, Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {AuthResponseInterface} from "../types/authResponse.interface";
import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {LoginRequestInterface} from "../types/loginRequest.interface";


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users`
    return this.createPostUser(url, data)
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users/login`
    return this.createPostUser(url, data)
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users`
    return this.http.get(url).pipe(
      map((response: AuthResponseInterface) => response.user)
    )
  }

  private createPostUser(url: string, data: any) {
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(
        map((response: AuthResponseInterface) => {
          return response.user
        })
      )
  }

}
