import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantsService } from '../../services/restaurante.service';
import { Restaurante } from '../../model/restaurante.entity';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { RouterLink, Router, RouterLinkActive } from '@angular/router'; // Asegúrate de tener RouterLink
import { MatIconModule } from '@angular/material/icon'; // Asegúrate de tener MatIconModule
import { MatButtonModule } from '@angular/material/button'; // Asegúrate de tener MatButtonModule
import { MatToolbarModule } from '@angular/material/toolbar'; // Asegúrate de tener MatToolbarModule
import { MatCardModule } from '@angular/material/card'; // Asegúrate de tener MatCardModule
import { NgOptimizedImage } from '@angular/common';
import {HeaderContentComponent} from "../../../../public/components/header-content/header-content.component"; // Asegúrate de tener NgOptimizedImage

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
    imports: [
        CommonModule, // Agrega CommonModule aquí
        RouterLink,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        NgOptimizedImage,
        HeaderContentComponent,
        RouterLinkActive
    ],
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants$: Observable<Restaurante[]>;
  dataR: Restaurante[]= [];

  constructor(private restaurantsService: RestaurantsService, private router: Router) {
    this.restaurants$ = this.restaurantsService.getRestaurants();
  }

  private getAllRestaurants(){
    this.restaurantsService.getAll().subscribe((response: any) =>{
      this.dataR = response;
    })
  }
  
  restaurants: any[] = [];

  goToRestaurantForm() {
    this.router.navigate(['/add-restaurant']);
  }

  ngOnInit() {
    this.getAllRestaurants();
    const state = history.state;
    if (state.newRestaurant) {
      this.dataR.push(state.newRestaurant);
    }
  }
  redirectToBooking(url:string):void{
    window.location.href=url;
  }
  openLinkInNewTab() {
    const activeElement = document.activeElement as HTMLElement | null;
    if (activeElement) {
      const link = activeElement.getAttribute('routerLink');
      if (link) {
        window.open(link, '_blank');
      }
    }
  }
}
