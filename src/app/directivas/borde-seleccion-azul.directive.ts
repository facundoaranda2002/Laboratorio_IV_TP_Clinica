import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBordeSeleccionAzul]',
  standalone: true
})
export class BordeSeleccionAzulDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    this.setBorder('4px solid blue');
  }

  @HostListener('mouseout') onMouseOut() {
    this.setBorder('');
  }

  private setBorder(value: string) {
    this.renderer.setStyle(this.el.nativeElement, 'border', value);
  }
}