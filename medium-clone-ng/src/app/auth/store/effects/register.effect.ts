import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action'
import { AuthService } from '../../register/services/auth.service'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import {catchError, map, of, switchMap} from 'rxjs'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ req }) => {
        // we use pipe instead of subscribe since it's a synchronous process
        return this.authService.register(req).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({ currentUser })
          }),
          catchError(() => {
            return of(registerFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private authService: AuthService) {}
}
