import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditspaComponent } from './editspa.component';

describe('EditspaComponent', () => {
  let component: EditspaComponent;
  let fixture: ComponentFixture<EditspaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditspaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
