import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './portfolio/calculator/calculator.component';
import { HomeComponent } from './portfolio/home/home.component';
import { EightBallComponent } from './portfolio/eight-ball/eight-ball.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { ChatComponent } from './portfolio/chat/chat.component';
import { SignupFormComponent } from './portfolio/chat/signup-form/signup-form.component';
import { LoginFormComponent } from './portfolio/chat/login-form/login-form.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { ProjectsMainComponent } from './Projects/projects-main/projects-main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsMainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'eight-ball',
    component: EightBallComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'chat', component: ChatComponent },
  { path: 'login', component: LoginFormComponent },
  {
    path: 'signup',
    component: SignupFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
