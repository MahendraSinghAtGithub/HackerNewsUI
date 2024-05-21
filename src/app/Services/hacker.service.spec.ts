import { TestBed } from '@angular/core/testing';

import { HackerService } from './hacker.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
describe('HackerService', () => {
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;
  let service :HackerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
