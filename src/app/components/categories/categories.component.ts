import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCategories().subscribe((data) => {
      console.log(data);
      this.categories = data as Category[];
    });
  }
}
