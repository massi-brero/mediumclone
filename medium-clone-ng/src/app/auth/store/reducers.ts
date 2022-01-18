import { Action, createReducer, on } from '@ngrx/store'

import { AuthStateInterface } from '../types/authStateInterface'
import { registerAction } from './actions/register.action'

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
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
