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
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  departamentos: Departamento[] = [
    {value: '1', viewValue: 'Depto 1'},
    {value: '2', viewValue: 'Depto 2'},
    {value: '3', viewValue: 'Depto 3'}
  ];

  puestos: Puesto[] = [
    {value: '1', viewValue: 'Puesto 1'},
    {value: '2', viewValue: 'Puesto 2'},
    {value: '3', viewValue: 'Puesto 3'}
  ];

  fechaNac = '';
  fechaIngreso = '';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() {

   }

  ngOnInit() {
  }
}

const ELEMENT_DATA = [
  {position: 1, name: 'Curso 1', weight: 'SI/NO', symbol: 'link a formato'},
  {position: 2, name: 'Curso 2', weight: 'SI/NO', symbol: 'link a formato'},
  {position: 3, name: 'Curso 3', weight: 'SI/NO', symbol: 'link a formato'},
  {position: 4, name: 'Curso 4', weight: 'SI/NO', symbol: 'link a formato'},
  {position: 5, name: 'Curso 5', weight: 'SI/NO', symbol: 'link a formato'},
];
