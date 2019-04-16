import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtreatmentComponent } from './viewtreatment.component';

describe('ViewtreatmentComponent', () => {
  let component: ViewtreatmentComponent;
  let fixture: ComponentFixture<ViewtreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
