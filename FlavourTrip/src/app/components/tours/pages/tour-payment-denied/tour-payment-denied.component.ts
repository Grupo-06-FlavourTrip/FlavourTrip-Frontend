import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {HeaderContentComponent} from "../../../../public/components/header-content/header-content.component";

@Component({
  selector: 'app-tour-payment-denied',
  standalone: true,
    imports: [
        MatButton,
        RouterLinkActive,
        RouterLink,
        HeaderContentComponent
    ],
  templateUrl: './tour-payment-denied.component.html',
  styleUrl: './tour-payment-denied.component.css'
})
export class TourPaymentDeniedComponent {

}

