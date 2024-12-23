import { Component } from '@angular/core';
import {RouterLink,Router} from "@angular/router";
import {LocalstorageService} from "../../../public/components/local-storage/localstorage.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf, ButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private localStorage: LocalstorageService, private router: Router) {}
  register() {
    const user = {
      username: this.username,
      password: this.password
    };

    if (this.localStorage.register(user)) {
      console.log('User registered successfully!');
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Username already exists!';
    }
  }
}
