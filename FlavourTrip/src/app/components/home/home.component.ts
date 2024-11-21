import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterLink} from "@angular/router";
import {MatCardModule} from '@angular/material/card';
import {HeaderContentComponent} from "../../public/components/header-content/header-content.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatCardModule, HeaderContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
