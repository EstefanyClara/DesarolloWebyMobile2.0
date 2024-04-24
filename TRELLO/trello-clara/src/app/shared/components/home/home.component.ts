import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
