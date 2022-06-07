import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrolltoselecteddirective]',
})
export class ScrollToSelectedDirective implements AfterViewInit {
  @Input('scrollToSelected') scrollToClass: string | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.el.nativeElement.classList.contains(this.scrollToClass)) {
      this.el.nativeElement.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  }
}
