import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RestaurantsService } from '../../services/restaurante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-form',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './restaurant-form.component.html',
  styleUrl: './restaurant-form.component.css'
})
export class RestaurantFormComponent {
  constructor(private restaurantsService: RestaurantsService, private router: Router) {}

  restaurant = {
    name: '',
    description: '',
    image: '',
    bookingLink: ''
  };

  onSubmit() {
    this.restaurantsService.create(this.restaurant).subscribe({
      next: (newRestaurant) => {
        console.log('Restaurante añadido:', newRestaurant);
        this.clearForm();
        this.router.navigate(['/restaurant-list'], { state: { newRestaurant } });
      },
      error: (err) => {
        console.error('Error al añadir el restaurante:', err);
      },
    });
  }

  onCancel() {
    this.clearForm();
    this.router.navigate(['/restaurant-list']);
  }

  clearForm() {
    this.restaurant = { name: '', description: '', image: '' , bookingLink: ''};
  }

}
