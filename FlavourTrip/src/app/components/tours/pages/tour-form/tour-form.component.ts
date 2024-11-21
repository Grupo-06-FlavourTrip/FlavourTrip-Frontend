import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ToursService } from '../../services/tours.service';

@Component({
  selector: 'app-tour-form',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,],
  templateUrl: './tour-form.component.html',
  styleUrl: './tour-form.component.css'
})
export class TourFormComponent {

  constructor(private toursService: ToursService, private router: Router) {}

  tour = {
    titleTour: '',
    imageTour: '',
    instructor: '',
    rating: '',
    numberOfRatings: '',
    minPrice: '',
    currentPeople: '',
    maxPeople: '',
    language: '',
    duration: '',
    itemsIncluded: [],
    moreInfoLink: '',
    buttonLink: '',
    date: '',
    description: '',
    times: [],
    hours: [],
    titleRestaurant: []
  };

  onSubmit() {
    this.toursService.create(this.tour).subscribe({
      next: (newTour) => {
        this.clearForm();
      },
      error: (err) => console.error('Error adding tour:', err),
    });
    this.router.navigate(['/tour-list']);
  }

  onCancel() {
    this.clearForm();
    this.router.navigate(['/tour-list']);
  }

  clearForm() {
    this.tour = { titleTour: '',
      imageTour: '',
      instructor: '',
      rating: '',
      numberOfRatings: '',
      minPrice: '',
      currentPeople: '',
      maxPeople: '',
      language: '',
      duration: '',
      itemsIncluded: [],
      moreInfoLink: '',
      buttonLink: '',
      date: '',
      description: '',
      times: [],
      hours: [],
      titleRestaurant: []
    };
  }

}
