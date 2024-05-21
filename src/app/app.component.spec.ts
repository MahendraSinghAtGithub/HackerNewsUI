import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HackerService } from './Services/hacker.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { NewsGridComponent } from './Components/news-grid/news-grid.component';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>;
  let component:AppComponent;
  let httpMock : HttpTestingController;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppComponent,HttpClientTestingModule,NewsGridComponent,BrowserAnimationsModule],
      providers:[]
    });

    await TestBed.compileComponents();
    fixture = TestBed.createComponent(AppComponent);

    component = fixture.componentInstance;
    httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>)
    
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'HackerNewsUI' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HackerNewsUI');
  });

});
