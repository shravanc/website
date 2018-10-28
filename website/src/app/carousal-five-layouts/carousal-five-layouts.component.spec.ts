import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalFiveLayoutsComponent } from './carousal-five-layouts.component';

describe('CarousalFiveLayoutsComponent', () => {
  let component: CarousalFiveLayoutsComponent;
  let fixture: ComponentFixture<CarousalFiveLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalFiveLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalFiveLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
