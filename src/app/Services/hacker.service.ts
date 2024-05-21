import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoryDTO } from '../DTO/StoryDTO';

const baseUrl:string = "https://localhost:7117/HackerNews";

@Injectable({
  providedIn: 'root',
})
export class HackerService {

  
  constructor(private http:HttpClient) { }

  getRepoIssues(): Observable<Array<StoryDTO>> {
    return this.http.get<Array<StoryDTO>>(baseUrl);
  }
}


