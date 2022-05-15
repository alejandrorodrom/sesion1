import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';
import { Componente2Component } from './componente2/componente2.component';

const routes: Routes = [
  {
    path: 'xyz',
    component: XyzComponent
  },
  {
    path: 'componente2',
    component: Componente2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
