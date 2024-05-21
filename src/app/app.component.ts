import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsGridComponent } from './Components/news-grid/news-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewsGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HackerNewsUI';
}
