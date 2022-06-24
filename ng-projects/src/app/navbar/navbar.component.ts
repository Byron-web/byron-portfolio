import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  toHome() {
    // @ts-ignore
    document.getElementById('home').scrollIntoView();
  }

  toAbout() {
    // @ts-ignore
    document.getElementById('about').scrollIntoView();
  }

  toProjects() {
    // @ts-ignore
    document.getElementById('projects').scrollIntoView();
  }

  toContact() {
    // @ts-ignore
    document.getElementById('contact').scrollIntoView();
  }

}
