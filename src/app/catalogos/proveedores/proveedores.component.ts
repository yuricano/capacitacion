import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

const ELEMENT_DATA = [
  {position: 1, name: 'Consultoría 1', weight: 'Especiaización 1', symbol: 'Instructor 1'},
  {position: 2, name: 'Consultoría 2', weight: 'Especiaización 2', symbol: 'Instructor 2'},
  {position: 3, name: 'Consultoría 3', weight: 'Especiaización 3', symbol: 'Instructor 3'},
  {position: 4, name: 'Consultoría 4', weight: 'Especiaización 4', symbol: 'Instructor 4'},
  {position: 5, name: 'Consultoría 5', weight: 'Especiaización 5', symbol: 'Instructor 5'},
];
