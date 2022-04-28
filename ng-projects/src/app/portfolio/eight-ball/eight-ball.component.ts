import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eight-ball',
  templateUrl: './eight-ball.component.html',
  styleUrls: ['./eight-ball.component.scss'],
})
export class EightBallComponent implements OnInit {
  userName: string = 'Byron';
  askQuestion: string = '';
  eightBall: string = '';
  randomArr: Array<string> = [
    'Eish I dont know!',
    'It is certain',
    'It is decidedly so',
    'Reply hazy try again',
    'Cannot predict now',
    'Do not count on it',
    'My sources say no',
    'Outlook not so good',
    'Signs point to yes',
    'Haibo!',
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubName(): void {
    this.userName.length > 0
      ? console.log(`Hello ${this.userName}`)
      : console.log('Hello Guest!');
  }

  onAskQuiz(): void {
    console.log(`${this.userName} asked: ${this.askQuestion}`);
  }

  onRandom(): string {
    this.eightBall =
      this.randomArr[Math.floor(Math.random() * this.randomArr.length)];
    return this.eightBall;
  }
}
