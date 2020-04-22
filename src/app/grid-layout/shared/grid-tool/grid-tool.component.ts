import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-grid-tool',
  templateUrl: './grid-tool.component.html',
  styleUrls: ['./grid-tool.component.scss']
})
export class GridToolComponent implements OnInit {
  @Input('openTool') openTool;
  @Output() refreshGridConfig : EventEmitter<any> = new EventEmitter<any>(); 
  gridWidth: any;
  gridHeight: any;
  gridMargin: any;
  gridConfig: any;
  constructor() { }

  ngOnInit() {
    this.gridConfig = JSON.parse(localStorage.getItem('gridConfig'));
    this.setGridConfig();
  }
  setGridConfig() {
    this.gridWidth = this.gridConfig['width'];
    this.gridHeight = this.gridConfig['heigth'];
    this.gridMargin = this.gridConfig['margin'];
  }
  saveGridConfig() {
   let gridConfig = {
      'width': this.gridWidth,
      'heigth': this.gridHeight,
      'margin': this.gridMargin
    }
    localStorage.setItem('gridConfig', JSON.stringify(gridConfig));
    this.refreshGridConfig.emit();
  }
}
