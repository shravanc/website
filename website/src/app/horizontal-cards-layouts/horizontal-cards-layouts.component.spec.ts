import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCardsLayoutsComponent } from './horizontal-cards-layouts.component';

describe('HorizontalCardsLayoutsComponent', () => {
  let component: HorizontalCardsLayoutsComponent;
  let fixture: ComponentFixture<HorizontalCardsLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalCardsLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalCardsLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
