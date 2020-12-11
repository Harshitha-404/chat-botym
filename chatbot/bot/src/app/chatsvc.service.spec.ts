import { TestBed } from '@angular/core/testing';

import { ChatsvcService } from './chatsvc.service';

describe('ChatsvcService', () => {
  let service: ChatsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
