import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.innerText = 'Well this is new';
  }

}
