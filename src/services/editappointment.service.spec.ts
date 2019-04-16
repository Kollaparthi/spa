import { TestBed } from '@angular/core/testing';

import { EditappointmentService } from './editappointment.service';

describe('EditappointmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditappointmentService = TestBed.get(EditappointmentService);
    expect(service).toBeTruthy();
  });
});
