import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittherapistComponent } from './edittherapist.component';

describe('EdittherapistComponent', () => {
  let component: EdittherapistComponent;
  let fixture: ComponentFixture<EdittherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
