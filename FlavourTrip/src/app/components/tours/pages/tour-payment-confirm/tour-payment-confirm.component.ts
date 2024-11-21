import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {HeaderContentComponent} from "../../../../public/components/header-content/header-content.component";

@Component({
  selector: 'app-tour-payment-confirm',
  standalone: true,
    imports: [
        MatButton,
        MatAnchor,
        RouterLink,
        RouterLinkActive,
        HeaderContentComponent
    ],
  templateUrl: './tour-payment-confirm.component.html',
  styleUrl: './tour-payment-confirm.component.css'
})
export class TourPaymentConfirmComponent {

}
