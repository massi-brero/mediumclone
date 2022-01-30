import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../actionTypes";
import {BackendErrorsInterface} from "../../../shared/types/backendErrors.interface";
import {AuthResponseInterface} from "../../types/authResponse.interface";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";

export const getCurrentUserAction = createAction(
  ActionTypes.GET_CURRENT_USER
)

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
)
