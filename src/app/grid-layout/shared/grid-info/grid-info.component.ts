import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-info',
  templateUrl: './grid-info.component.html',
  styleUrls: ['./grid-info.component.scss']
})
export class GridInfoComponent implements OnInit {
  @Input('selectedGrid') selectedGrid;
  @Input('openGridInfo') openGridInfo;
  @Output() closeInfoPopup : EventEmitter<any> = new EventEmitter<any>(); 
  constructor() { }

  ngOnInit() {
    console.log("selectedGrid", this.selectedGrid);
    console.log("openGridInfo", this.openGridInfo);
  }

  close() {
    this.closeInfoPopup.emit();
  }  
}
