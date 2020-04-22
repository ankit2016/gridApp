import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gridApp';
  public gridList = [0,0,0,0,0,0,0,0,0,0,0];
  public gridConfig = {
    'width': 300,
    'heigth': 200,
    'margin': 10
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let checkIfGridExist = JSON.parse(localStorage.getItem('gridList'));
    !checkIfGridExist ? 
    localStorage.setItem('gridList', JSON.stringify(this.gridList)) : '';

    let checkIfGridConfigExist = JSON.parse(localStorage.getItem('gridConfig'));
    !checkIfGridConfigExist ? 
    localStorage.setItem('gridConfig', JSON.stringify(this.gridConfig)) : '';

  }
}
