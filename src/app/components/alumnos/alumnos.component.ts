import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  // titulo: string = 'Listado de Alumnos';
  titulo = 'Listado de Alumnos';  

  constructor() { }

  ngOnInit(): void {
  }

}
