import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
