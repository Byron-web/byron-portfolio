import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss'],
})
export class SkillSetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toProjects() {
    // @ts-ignore
    document.getElementById('projects').scrollIntoView();
  }
}
