import { TestBed, async, inject } from '@angular/core/testing';

import { CandidatGuard } from './candidat.guard';

describe('CandidatGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatGuard]
    });
  });

  it('should ...', inject([CandidatGuard], (guard: CandidatGuard) => {
    expect(guard).toBeTruthy();
  }));
});
