import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductoService} from '../service/producto.service';
import {Producto} from '../model/producto';
import {ApiResponse} from '../service/api-response';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css'],
  providers: [ProductoService]
})
export class ProductosListComponent implements OnInit {

  public titulo: string;
  public productos: Producto[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) {
    this.titulo = 'Listado de productos';
  }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      (result: ApiResponse<Producto>)  => {
        if (result.code === 200) {
          this.productos = result.data;
        }
        console.log(this.productos);
      },
      error => {
        console.log(error);
      }
    );
  }
}

