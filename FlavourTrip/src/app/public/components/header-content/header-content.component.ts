import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button'; 
import { Router, RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [MatToolbar ,MatAnchor, MatButton, RouterLink, NgOptimizedImage, NgIf],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {
  currentUserName: string = '';
  constructor(private router: Router) {
  }

}
