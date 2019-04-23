import {Component, OnInit} from '@angular/core';
import {ProductoService} from '../service/producto.service';
import {Producto} from '../model/producto';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css'],
  providers: [ProductoService]
})
export class ProductoDetailComponent implements OnInit {

  public producto: Producto;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    console.log('producto-detail cargado correctamente');
    this.getProducto();
  }

  getProducto() {
    this.route.params.forEach((params: Params) => {
      const id = params.id;

      this.productoService.getProducto(id).subscribe(
        (response: { code: number, data: Producto }) => {
          if (response.code === 200) {
            this.producto = response.data;
          } else {
            this.router.navigate(['/productos']);
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }

}
