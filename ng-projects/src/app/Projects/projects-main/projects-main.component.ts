import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-main',
  templateUrl: './projects-main.component.html',
  styleUrls: ['./projects-main.component.scss'],
})
export class ProjectsMainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toContact() {
    // @ts-ignore
    document.getElementById('contact').scrollIntoView();
  }

  toMagic() {
    // @ts-ignore
    document.getElementById('eightball').scrollIntoView();
  }
}
