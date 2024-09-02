import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() navigate = new EventEmitter<string>();
  collapsed = true;
  onNavigate(link: string) {
    this.navigate.emit(link);
  }
}
