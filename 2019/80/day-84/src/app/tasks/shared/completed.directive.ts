import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[completed]'
})

export class CompletedDirective implements OnInit {
  @Input() completed: boolean;

  constructor(private el: ElementRef = null) { }

  ngOnInit() {
    if (this.completed) {
      return this.el.nativeElement.style.fontStyle = 'italic';
    }
  }
}
