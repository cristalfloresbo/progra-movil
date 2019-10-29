import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HomePage } from './home.page';
import { RegisterComponent } from '../register/register.component';
import { AuthenticateService } from '../register/service/authentication.service';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AngularFireAuthModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ],
  providers: [AuthenticateService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  declarations: [HomePage, RegisterComponent]
})
export class HomePageModule {}
