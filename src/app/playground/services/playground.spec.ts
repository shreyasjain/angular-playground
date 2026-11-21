import { TestBed } from '@angular/core/testing';

import { Playground } from './playground';

describe('Playground', () => {
  let service: Playground;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Playground);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
