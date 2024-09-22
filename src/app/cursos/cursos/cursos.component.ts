import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [
    { _id: "1", nome: "Angular 18", categoria: "Front-End" },
    { _id: "2", nome: "SpringBoot", categoria: "Back-End" }
  ];
  displayedColumns = ['nome', 'categoria'];

  constructor() {

   }

  ngOnInit(): void {

  }

}
