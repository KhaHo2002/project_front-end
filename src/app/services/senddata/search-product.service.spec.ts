import { TestBed } from '@angular/core/testing';

import { SearchProductService } from './send_data.service';

describe('SearchProductService', () => {
  let service: SearchProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
