import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}
  isAuth = false;

  @Output() navigate = new EventEmitter<string>();
  collapsed = true;
  onNavigate(link: string) {
    this.navigate.emit(link);
  }
  onSaveData() {
    this.dataStorageService.storeRecipe();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipe().subscribe();
  }
}
