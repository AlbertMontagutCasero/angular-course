import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  public titulo: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.titulo = 'Listado de productos';
  }

  ngOnInit() {
    log('productos-list.component.ts cargado');
  }
}
