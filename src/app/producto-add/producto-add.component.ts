import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params, Route, RouteConfigLoadEnd} from '@angular/router';
import {ProductoService} from '../service/producto.service';
import {Producto} from '../model/producto';
import {ApiResponse} from '../service/api-response';
import {GLOBAL} from '../global';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css'],
  providers: [ProductoService]
})
export class ProductoAddComponent implements OnInit {

  public titulo: string;
  public producto: Producto;
  public filesToUpload;
  public resultUpload;

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
    if (this.filesToUpload && this.filesToUpload.length > 0) {
      this.productoService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result: {filename: string}) => {
          console.log(result.filename);
          this.producto.imagen = result.filename;
          this.saveProducto();

        }, (err) => {
          console.log(err);
        }
      );
    } else {
      this.saveProducto();
    }
  }

  saveProducto() {
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


  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files as Array<File>;
    console.log(this.filesToUpload);
  }
}
