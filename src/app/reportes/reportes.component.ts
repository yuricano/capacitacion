import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA = [
  {position: 1, name: 'Reporte 1', weight: 'Descripción del reporte 1'},
  {position: 2, name: 'Reporte 2', weight: 'Descripción del reporte 2'},
  {position: 3, name: 'reporte 3', weight: 'Descripción del reporte 3'},
];
