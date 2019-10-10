import { TestBed } from '@angular/core/testing';

import { GoogleanalyticsService } from './googleanalytics.service';

describe('GoogleanalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleanalyticsService = TestBed.get(GoogleanalyticsService);
    expect(service).toBeTruthy();
  });
});
