import { Component, OnInit } from '@angular/core';
import { GridLayoutService } from '../grid-layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-detail',
  templateUrl: './grid-detail.component.html',
  styleUrls: ['./grid-detail.component.scss']
})
export class GridDetailComponent implements OnInit {
  gridDetail: any;

  constructor(
    private gridService: GridLayoutService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.gridDetail = this.gridService.navigatedGrid;
  }

  backToGridlayout() {
    try {
      this._router.navigate(['grid-layout']);
    } catch (error) {
      
    }
  }

}
