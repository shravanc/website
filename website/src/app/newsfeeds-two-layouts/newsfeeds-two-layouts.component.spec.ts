import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedsTwoLayoutsComponent } from './newsfeeds-two-layouts.component';

describe('NewsfeedsTwoLayoutsComponent', () => {
  let component: NewsfeedsTwoLayoutsComponent;
  let fixture: ComponentFixture<NewsfeedsTwoLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedsTwoLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedsTwoLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
