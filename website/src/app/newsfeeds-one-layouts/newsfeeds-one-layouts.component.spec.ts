import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedsOneLayoutsComponent } from './newsfeeds-one-layouts.component';

describe('NewsfeedsOneLayoutsComponent', () => {
  let component: NewsfeedsOneLayoutsComponent;
  let fixture: ComponentFixture<NewsfeedsOneLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedsOneLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedsOneLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
