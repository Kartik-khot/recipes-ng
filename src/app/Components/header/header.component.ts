import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: `header.component.html`,
  styleUrls: [
    'header.component.css'
  ]
})
export class HeaderComponent {
 @Output() selected = new EventEmitter<string>();
 public collapsed = true;

onSelect( selected: string ) {
  this.selected.emit(selected);
}

}