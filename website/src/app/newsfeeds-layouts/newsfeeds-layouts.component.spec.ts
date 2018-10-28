import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedsLayoutsComponent } from './newsfeeds-layouts.component';

describe('NewsfeedsLayoutsComponent', () => {
  let component: NewsfeedsLayoutsComponent;
  let fixture: ComponentFixture<NewsfeedsLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedsLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedsLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
