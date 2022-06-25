import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { AddnewuserComponent } from './components/users/addnewuser/addnewuser.component';
import { SearchuserComponent } from './components/users/searchuser/searchuser.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import {NgToastModule} from "ng-angular-popup";
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, SignupComponent, LoginComponent, UsersComponent, AddnewuserComponent, SearchuserComponent, HomeComponent, HeaderComponent, SidenavListComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      preventDuplicates: true,
    }),
  ],
  providers: [AuthService,DatePipe],

  bootstrap: [AppComponent],
})
export class AppModule {}
