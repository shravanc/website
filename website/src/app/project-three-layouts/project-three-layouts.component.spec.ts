import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectThreeLayoutsComponent } from './project-three-layouts.component';

describe('ProjectThreeLayoutsComponent', () => {
  let component: ProjectThreeLayoutsComponent;
  let fixture: ComponentFixture<ProjectThreeLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectThreeLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectThreeLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
