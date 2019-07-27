import { TestBed } from '@angular/core/testing';

import { TestClientService } from './test-client.service';

describe('TestClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestClientService = TestBed.get(TestClientService);
    expect(service).toBeTruthy();
  });
});
