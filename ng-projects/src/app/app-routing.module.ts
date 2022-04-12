import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from "./portfolio/calculator/calculator.component";
import {HomeComponent} from "./portfolio/home/home.component";
import {EightBallComponent} from "./portfolio/eight-ball/eight-ball.component";
import {EmployeesComponent} from "./employees/employees.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'eight-ball', component: EightBallComponent},
  {path: 'employees', component: EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
