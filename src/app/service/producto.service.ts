import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Producto} from '../model/producto';
import {GLOBAL} from '../global';

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

  addProducto(producto: Producto) {
    const json = JSON.stringify(producto);
    const params = 'json=' + json;
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    console.log(params);
    return this.http.post(this.url + 'productos', params, {headers});
  }
}

