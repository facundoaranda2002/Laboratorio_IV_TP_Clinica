import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [MatCard],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private router:Router,private dialogRef:DialogRef){

  }

  ir(ruta:any){
    this.dialogRef.close();
    this.router.navigate([ruta])
  }

}
