import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridLayoutRoutingModule } from './grid-layout-routing.module';
import { GridLayoutComponent } from './grid-layout.component';
import { GridFooterComponent } from '../shared/grid-footer/grid-footer.component';
import { GridHeaderComponent } from '../shared/grid-header/grid-header.component';
import { GridInfoComponent } from '../shared/grid-info/grid-info.component';
import { GridDetailComponent } from './grid-detail/grid-detail.component';
import { GridToolComponent } from '../shared/grid-tool/grid-tool.component';
import { FormsModule } from '@angular/forms'; 
import { GridLayoutService } from './grid-layout.service';

@NgModule({
  declarations: [
    GridLayoutComponent,
    GridFooterComponent,
    GridHeaderComponent,
    GridInfoComponent,
    GridDetailComponent,
    GridToolComponent
  ],
  imports: [
    CommonModule,
    GridLayoutRoutingModule,
    FormsModule
  ],
  providers:[GridLayoutService]
})
export class GridLayoutModule { }
