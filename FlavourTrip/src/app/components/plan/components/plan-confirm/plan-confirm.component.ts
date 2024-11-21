import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {HeaderContentComponent} from '../../../../public/components/header-content/header-content.component';

@Component({
  selector: 'app-plan-confirm',
  standalone: true,
  imports: [
    MatButton,
    MatAnchor,
    RouterLink,
    RouterLinkActive,
    HeaderContentComponent
  ],
  templateUrl: './plan-confirm.component.html',
  styleUrl: './plan-confirm.component.css'
})
export class PlanConfirmComponent {

}
