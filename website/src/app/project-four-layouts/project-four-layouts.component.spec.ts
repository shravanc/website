import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFourLayoutsComponent } from './project-four-layouts.component';

describe('ProjectFourLayoutsComponent', () => {
  let component: ProjectFourLayoutsComponent;
  let fixture: ComponentFixture<ProjectFourLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFourLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFourLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
