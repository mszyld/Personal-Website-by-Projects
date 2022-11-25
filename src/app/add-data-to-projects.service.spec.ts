import { TestBed } from '@angular/core/testing';

import { AddDataToProjectsService } from './add-data-to-projects.service';

describe('AddDataToProjectsService', () => {
  let service: AddDataToProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDataToProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
