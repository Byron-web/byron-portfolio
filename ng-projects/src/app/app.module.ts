import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalculatorComponent} from "./portfolio/calculator/calculator.component";
import { HomeComponent } from './portfolio/home/home.component';
import { EightBallComponent } from './portfolio/eight-ball/eight-ball.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HomeComponent,
    EightBallComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
