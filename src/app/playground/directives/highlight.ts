import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostBinding('style.backgroundColor')
  backgroundColor = 'transparent'

  @HostListener('mouseenter')
  onMouseEnter(){
    this.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.backgroundColor = 'transparent'
  }

  // @HostListener('mouseenter')
  // onMouseEnter(){
  //   this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow')
  // }

  // @HostListener('mouseleave')
  // onMouseLeave(){
  //   this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'transparent')
  // }
}
