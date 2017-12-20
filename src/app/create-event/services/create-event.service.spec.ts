import { TestBed, inject } from '@angular/core/testing';

import { CreateEventService } from './create-event.service';

describe('CreateEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateEventService]
    });
  });

  it('should be created', inject([CreateEventService], (service: CreateEventService) => {
    expect(service).toBeTruthy();
  }));
});
