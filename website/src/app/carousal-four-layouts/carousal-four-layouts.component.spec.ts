import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalFourLayoutsComponent } from './carousal-four-layouts.component';

describe('CarousalFourLayoutsComponent', () => {
  let component: CarousalFourLayoutsComponent;
  let fixture: ComponentFixture<CarousalFourLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalFourLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalFourLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
