import { TestBed } from '@angular/core/testing';

import { BackendConnectorService } from './backend-connector-service';

describe('MessageServiceService', () => {
  let service: BackendConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
