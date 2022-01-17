import {Injectable} from '@angular/core'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'
import {map, Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../../environments/environment'
import {AuthResponseInterface} from "../../types/authResponse.interface";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    console.log(data)
    const url = `${environment.apiUrl}/users`
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(
        map((response: AuthResponseInterface) => {
          return response.user
        })
      )
  }
}
