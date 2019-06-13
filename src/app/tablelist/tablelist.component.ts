import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css']
})
export class TablelistComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA = [
  {position: 1, name: 'Curso 1', weight: 'Capacitador 1', symbol: 'Si'},
  {position: 2, name: 'Curso 2', weight: 'Capacitador 3', symbol: 'Si'},
  {position: 3, name: 'Curso 3', weight: 'Capacitador 1', symbol: 'No'},
  {position: 4, name: 'Curso 4', weight: 'Capacitador 5', symbol: 'Si'},
  {position: 5, name: 'Curso 5', weight: 'Capacitador 2', symbol: 'No'}
];
