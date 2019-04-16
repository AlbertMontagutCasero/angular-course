import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';
import {ProductosListComponent} from './productos-list/productos-list.component';

const  appRoutes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'home', component: HomeComponent},
  { path : 'productos', component: ProductosListComponent },
  { path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
