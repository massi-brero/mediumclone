import { Action, createReducer, on } from '@ngrx/store'

import { AuthStateInterface } from '../types/authStateInterface'
import {registerAction, registerFailureAction, registerSuccessAction} from './actions/register.action'

const initialState: AuthStateInterface = {
  isLoggedIn: null,
  isSubmitting: false,
  currentUser: null,
  validationErrors: null
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      validationErrors: action.errors
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
