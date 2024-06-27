import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css',
  animations: [
    trigger('fadeAndScale', [
      state('void', style({ opacity: 0, transform: 'scale(0.5)' })),
      transition(':enter, :leave', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class BienvenidaComponent {

}
