import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspaComponent } from './addspa.component';

describe('AddspaComponent', () => {
  let component: AddspaComponent;
  let fixture: ComponentFixture<AddspaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
