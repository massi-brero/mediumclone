import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './register/register/register.component'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import { reducers } from './store/reducers'
import { AuthService } from './register/services/auth.service'
import { EffectsModule } from '@ngrx/effects'
import { RegisterEffect } from './store/effects/register.effect'
import {
  BackendErrorMessagesComponent
} from "../shared/modules/backend-error-messages/backendErrorMessages/components/backend-error-messages/backend-error-messages.component";
import {BackendErrorMessagesModule} from "../shared/modules/backend-error-messages/backend-error-messages.module";

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule
  ],
  providers: [AuthService],
})
export class AuthModule {}
