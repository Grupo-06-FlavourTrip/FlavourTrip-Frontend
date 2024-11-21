import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {RouterLink} from "@angular/router";
import {HeaderContentComponent} from "../../../../public/components/header-content/header-content.component";

@Component({
  selector: 'app-plan-options',
  standalone: true,
    imports: [MatCardModule, MatButtonModule, MatDividerModule, RouterLink, HeaderContentComponent],
  templateUrl: './plan-options.component.html',
  styleUrl: './plan-options.component.css'
})
export class PlanOptionsComponent {

}

