import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app.routing';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoAddComponent } from './producto-add/producto-add.component';
import {FormsModule} from '@angular/forms';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
    ProductoAddComponent,
    ProductoDetailComponent,
    ProductoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
