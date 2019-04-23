import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Producto} from '../model/producto';
import {GLOBAL} from '../global';
import {reject} from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public url: string;

  constructor(
    public http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  getProductos() {
    return this.http.get(this.url + 'productos');
  }

  getProducto(id: number) {
    return this.http.get(this.url + 'producto/' + id);
  }

  editProductos(producto: Producto) {
    const json = JSON.stringify(producto);
    const params = 'json=' + json;
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post(this.url + 'update-producto/' + producto.id, params, {headers});
  }

  addProducto(producto: Producto) {
    const json = JSON.stringify(producto);
    const params = 'json=' + json;
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    console.log(params);
    return this.http.post(this.url + 'productos', params, {headers});
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {

    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      for (const file of files) {
        formData.append('uploads[]', file, file.name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }
}

