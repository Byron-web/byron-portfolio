import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public input: string = '';
  public output: number = 0;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/data/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }
}
