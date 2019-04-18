import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params, Route} from '@angular/router';
import {ProductoService} from '../service/producto.service';
import {Producto} from '../model/producto';
import {ApiResponse} from '../service/api-response';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css'],
  providers: [ProductoService]
})
export class ProductoAddComponent implements OnInit {

  public titulo: string;
  public producto: Producto;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.titulo = 'Crear un nuevo producto';
    this.producto = new Producto(0, '', '', 0, '');
  }

  ngOnInit() {
    console.log('producto-add.component working');
  }

  onSubmit() {
    this.productoService.addProducto(this.producto).subscribe(
      (response: ApiResponse<Producto>) => {
        console.log(response);
        if (response.code === 200) {
          this.router.navigate(['/productos']);
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
