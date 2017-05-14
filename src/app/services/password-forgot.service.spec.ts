import { TestBed, inject } from '@angular/core/testing';

import { PasswordForgotService } from './password-forgot.service';

describe('PasswordForgotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordForgotService]
    });
  });

  it('should ...', inject([PasswordForgotService], (service: PasswordForgotService) => {
    expect(service).toBeTruthy();
  }));
});
