import {Component, OnInit} from '@angular/core';
import {ProductoService} from '../service/producto.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Producto} from '../model/producto';
import {GLOBAL} from '../global';
import {ApiResponse} from '../service/api-response';

@Component({
  selector: 'app-producto-edit',
  templateUrl: '../producto-add/producto-add.component.html',
  styleUrls: ['./producto-edit.component.css'],
  providers: [ProductoService]
})
export class ProductoEditComponent implements OnInit {
  public titulo: string;
  public producto: Producto;
  public filesToUpload;
  public isEdit;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.titulo = 'Editar Producto';
    this.producto = new Producto();
    this.isEdit = true;
  }

  ngOnInit() {
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

  onSubmit() {
    if (this.filesToUpload && this.filesToUpload.length > 0) {
      this.productoService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result: { filename: string }) => {
          console.log(result.filename);
          this.producto.imagen = result.filename;
          this.editProducto();

        }, (err) => {
          console.log(err);
        }
      );
    } else {
      this.editProducto();
    }
  }

  editProducto() {
    this.productoService.editProductos(this.producto).subscribe(
      (response: ApiResponse<Producto>) => {
        console.log(response);
        if (response.code === 200) {
          this.router.navigate(['/producto', this.producto.id]);
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(error);
      }
    );
  }


  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files as Array<File>;
    console.log(this.filesToUpload);
  }

}
