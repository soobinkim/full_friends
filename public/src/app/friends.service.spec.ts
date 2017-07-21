import { TestBed, inject } from '@angular/core/testing';

import { FriendsService } from './friends/friends.service';

describe('FriendsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendsService]
    });
  });

  it('should be created', inject([FriendsService], (service: FriendsService) => {
    expect(service).toBeTruthy();
  }));
});
