import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsGridComponent } from './news-grid.component';
import { HackerService } from '../../Services/hacker.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('NewsGridComponent', () => {
  let fixture: ComponentFixture<NewsGridComponent>;
  let component: NewsGridComponent;
  let httpClient :HttpClient;
  let httpMock : HttpTestingController;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsGridComponent,HttpClientTestingModule,BrowserAnimationsModule,MatTableModule,MatPaginatorModule,MatFormFieldModule,MatInputModule],
      providers:[HackerService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsGridComponent);
    component = fixture.componentInstance;
    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
