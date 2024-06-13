import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormularioPacientesComponent } from '../../components/formulario-pacientes/formulario-pacientes.component';

@Component({
  selector: 'app-registro-pacientes',
  standalone: true,
  imports: [MatCardModule, FormularioPacientesComponent],
  templateUrl: './registro-pacientes.component.html',
  styleUrl: './registro-pacientes.component.css'
})
export class RegistroPacientesComponent {

}
