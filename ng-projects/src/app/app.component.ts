import {Component} from '@angular/core';
import {OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  public input: string = '';
  public output: number = 0;



  public onSubmit(value: string): void {
    this.input = this.input + value;
  }

  public onClear(): void {
    this.input = '';
    this.output = 0;
  }

  public onRemove(): void {
    this.input = this.input.substring(0, this.input.length - 1);
  }

  public onEquals() {
    const result = Function('return ' + this.input);
    this.output = result();
  }

}
