import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridLayoutComponent } from './grid-layout.component';
import { GridDetailComponent } from './grid-detail/grid-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'grid-layout',
    pathMatch: 'full'
  },
  { path: 'grid-layout', component:  GridLayoutComponent},
  { path: 'grid-detail', component: GridDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridLayoutRoutingModule { }
