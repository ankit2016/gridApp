import { Component, OnInit } from '@angular/core';
import { GridLayoutService } from './grid-layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss']
})
export class GridLayoutComponent implements OnInit {
  public gridList:any;
  selectedGrid: any;
  openGridInfo: boolean;
  gridConfig: any;
  gridWidth: any;
  gridHeight: any;
  gridMargin: any;
  constructor(
    private gridService: GridLayoutService,
    private _router: Router
    ) {
    this.gridList = JSON.parse(localStorage.getItem('gridList'));
    console.log(this.gridList);
    this.setGridConfig();
   }

  ngOnInit() {
  }

  /**
   * Method for add like/dislike
   */
  submitRating(currentRating, _itemIndex, givenRating) {
    try {
      setTimeout(() => {
        if (currentRating === 0) {
          this.gridList[_itemIndex] = givenRating;
        } else if (currentRating > 0 && givenRating === 1) {
          this.gridList[_itemIndex] = 0;
        } else if (currentRating > 0 && givenRating === 2) {
          this.gridList[_itemIndex] = givenRating;
        }
        localStorage.setItem('gridList', JSON.stringify(this.gridList));
      }, 300);
    } catch (error) {
      console.log(error);
    }
  }

  getInfo(index) {
    this.selectedGrid = index;
    this.openGridInfo = true;
  }

  closeInfoPopup() {
    this.openGridInfo = false;
  }
  setGridConfig() {
    this.gridConfig = JSON.parse(localStorage.getItem('gridConfig'));

    this.gridWidth = this.gridConfig.width;
    this.gridHeight = this.gridConfig.heigth;
    this.gridMargin = this.gridConfig.margin;
  }

  gotoGridDetail(item) {
    try {
      this.gridService.navigatedGrid = item;
      this._router.navigate(['grid-detail']);
    } catch (error) {
      
    }
  }
}
