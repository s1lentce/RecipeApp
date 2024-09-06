import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isLoginMode = false;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(authFOrm: NgForm) {}
}
