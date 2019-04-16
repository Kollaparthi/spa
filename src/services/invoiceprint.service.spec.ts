import { TestBed } from '@angular/core/testing';

import { InvoiceprintService } from './invoiceprint.service';

describe('InvoiceprintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceprintService = TestBed.get(InvoiceprintService);
    expect(service).toBeTruthy();
  });
});
