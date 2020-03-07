import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
  selector: "[appDropDown]"
})
export class DropDownDirective {

  constructor( private eleRef: ElementRef ) {}

  @HostBinding("class.open") isOpen = false;

  @HostListener("document:click", ['$event'] ) toggleOpen(event: Event) {
    this.isOpen = this.eleRef.nativeElement.contains(event.target) ? !this.isOpen : false ;
  }
}
