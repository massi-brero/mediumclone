import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './register/register/register.component'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import { reducers } from './store/reducers'
import { AuthService } from './services/auth.service'
import { EffectsModule } from '@ngrx/effects'
import { RegisterEffect } from './store/effects/register.effect'
import {
  BackendErrorMessagesComponent
} from "../shared/modules/backend-error-messages/backendErrorMessages/components/backend-error-messages/backend-error-messages.component";
import {BackendErrorMessagesModule} from "../shared/modules/backend-error-messages/backend-error-messages.module";
import {PersistanceService} from "../shared/services/persistance.service";
import {LoginEffect} from "./store/effects/login.effect";
import {LoginComponent} from "./login/login/login.component";

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect
    ]),
    BackendErrorMessagesModule
  ],
  providers: [
    AuthService,
    PersistanceService
  ],
})
export class AuthModule {}
