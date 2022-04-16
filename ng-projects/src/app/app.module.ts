import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalculatorComponent} from "./portfolio/calculator/calculator.component";
import { HomeComponent } from './portfolio/home/home.component';
import { EightBallComponent } from './portfolio/eight-ball/eight-ball.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {FormsModule} from "@angular/forms";
import { UserComponent } from './users/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {UserApiService} from "./services/users-api.service";
import { UserListComponent } from './users/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HomeComponent,
    EightBallComponent,
    PortfolioComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
