import { Component, OnInit } from '@angular/core';

export interface Departamento {
  value: string;
  viewValue: string;
}

export interface Puesto {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  fechaCurso = '';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

const ELEMENT_DATA = [
  {position: 1, name: 'Curso 1', weight: '10', symbol: '10 Ago 2019'},
  {position: 2, name: 'Curso 2', weight: '8', symbol: '1 Jul 2019'},
  {position: 3, name: 'Curso 3', weight: '20', symbol: '13 Feb 2019'},
  {position: 4, name: 'Curso 4', weight: '40', symbol: '6 Ene 2018'},
  {position: 5, name: 'Curso 5', weight: '2', symbol: '8 Feb 2017'},
];
