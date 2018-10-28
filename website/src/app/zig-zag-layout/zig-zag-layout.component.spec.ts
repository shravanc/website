import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZigZagLayoutComponent } from './zig-zag-layout.component';

describe('ZigZagLayoutComponent', () => {
  let component: ZigZagLayoutComponent;
  let fixture: ComponentFixture<ZigZagLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZigZagLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZigZagLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
