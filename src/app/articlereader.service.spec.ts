import { TestBed } from '@angular/core/testing';

import { ArticlereaderService } from './articlereader.service';

describe('ArticlereaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlereaderService = TestBed.get(ArticlereaderService);
    expect(service).toBeTruthy();
  });
});
