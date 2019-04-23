import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';
import {ProductosListComponent} from './productos-list/productos-list.component';
import {ProductoAddComponent} from './producto-add/producto-add.component';
import {ProductoDetailComponent} from './producto-detail/producto-detail.component';
import {ProductoEditComponent} from './producto-edit/producto-edit.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'crear-producto', component: ProductoAddComponent},
  {path: 'productos', component: ProductosListComponent},
  {path: 'producto/:id', component: ProductoDetailComponent},
  {path: 'editar-producto/:id', component: ProductoEditComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
