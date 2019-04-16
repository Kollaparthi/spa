import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspaComponent } from './viewspa.component';

describe('ViewspaComponent', () => {
  let component: ViewspaComponent;
  let fixture: ComponentFixture<ViewspaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewspaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
