import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './portfolio/calculator/calculator.component';
import { HomeComponent } from './portfolio/home/home.component';
import { EightBallComponent } from './portfolio/eight-ball/eight-ball.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './users/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserApiService } from './services/users-api.service';
import { UserListComponent } from './users/user-list/user-list.component';
import { ChatComponent } from './portfolio/chat/chat.component';
import { ChatFormComponent } from './portfolio/chat/chat-form/chat-form.component';
import { ChatRoomComponent } from './portfolio/chat/chat-room/chat-room.component';
import { FeedComponent } from './portfolio/chat/feed/feed.component';
import { LoginFormComponent } from './portfolio/chat/login-form/login-form.component';
import { MessageComponent } from './portfolio/chat/message/message.component';
import { SignupFormComponent } from './portfolio/chat/signup-form/signup-form.component';
import { UserItemComponent } from './portfolio/chat/user-item/user-item.component';
import { AuthService } from './services/auth.service';
import { ChatHeadComponent } from './portfolio/chat/chat-head/chat-head.component';
import { UserMenuComponent } from './portfolio/chat/user-menu/user-menu.component';
import { UserSearchComponent } from './portfolio/chat/user-search/user-search.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SearchFilterPipe } from './search-filter.pipe';
import { HighlightDirective } from './highlight.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsMainComponent } from './Projects/projects-main/projects-main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from 'ng-particles';
import { ScrollToSelectedDirective } from './directives/scrolltoselecteddirective.directive';
import { FooterComponent } from './footer/footer.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { AboutReviewComponent } from './more-info/about-review/about-review.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HomeComponent,
    EightBallComponent,
    PortfolioComponent,
    UserComponent,
    UserListComponent,
    ChatComponent,
    ChatFormComponent,
    ChatRoomComponent,
    FeedComponent,
    LoginFormComponent,
    MessageComponent,
    SignupFormComponent,
    UserItemComponent,
    ChatHeadComponent,
    UserMenuComponent,
    UserSearchComponent,
    SearchFilterPipe,
    HighlightDirective,
    NavbarComponent,
    ProjectsMainComponent,
    AboutComponent,
    ContactComponent,
    ScrollToSelectedDirective,
    FooterComponent,
    MoreInfoComponent,
    AboutReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatSliderModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserModule,
    NgParticlesModule,
  ],
  providers: [UserApiService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
