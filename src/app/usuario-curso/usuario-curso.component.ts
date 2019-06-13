import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-curso',
  templateUrl: './usuario-curso.component.html',
  styleUrls: ['./usuario-curso.component.css']
})
export class UsuarioCursoComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }
}

const ELEMENT_DATA = [
  {position: 1, name: 'Usuario', weight: 'Cursos', symbol: '60'},
  {position: 2, name: 'Usuario', weight: 'Cursos', symbol: '100'},
  {position: 3, name: 'Usuario', weight: 'Cursos', symbol: '10'},
  {position: 4, name: 'Usuario', weight: 'Cursos', symbol: '5'},
  {position: 5, name: 'Usuario', weight: 'Cursos', symbol: '13'},
];
