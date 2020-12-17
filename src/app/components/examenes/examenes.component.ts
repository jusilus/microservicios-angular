import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent implements OnInit {

  titulo = 'Listado de exámenes';

  constructor() { }

  ngOnInit(): void {
  }

}
