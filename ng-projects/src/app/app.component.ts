import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('myElem') MyProp: ElementRef | undefined;
  public input: string = '';
  public output: number = 0;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    // @ts-ignore
    this.MyProp.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
