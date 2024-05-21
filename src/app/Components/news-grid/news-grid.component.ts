import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { HackerService } from '../../Services/hacker.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StoryDTO } from '../../DTO/StoryDTO';

@Component({
  selector: 'app-news-grid',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,MatFormFieldModule,MatInputModule],
  templateUrl: './news-grid.component.html',
  styleUrl: './news-grid.component.css'
})
export class NewsGridComponent implements AfterViewInit{
  displayedColumns = ['author','title', 'comments'];
  dataSource = new MatTableDataSource<StoryDTO>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private hackerSvc:HackerService){}


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.hackerSvc.getRepoIssues().subscribe((resp)=>{
      this.dataSource.data = resp;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

