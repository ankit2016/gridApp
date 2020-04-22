import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridInfoComponent } from './grid-info.component';

describe('GridInfoComponent', () => {
  let component: GridInfoComponent;
  let fixture: ComponentFixture<GridInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
