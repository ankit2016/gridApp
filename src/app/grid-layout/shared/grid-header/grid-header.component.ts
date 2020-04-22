import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.scss']
})
export class GridHeaderComponent implements OnInit {
  openTool: boolean = false;
  @Output() refreshGridConfig : EventEmitter<any> = new EventEmitter<any>(); 
  constructor() { }

  ngOnInit() {
  }
  openGridConfigTool() {
    this.openTool = !this.openTool;
  }
  refreshGrid() {
    this.refreshGridConfig.emit();
  }

}
