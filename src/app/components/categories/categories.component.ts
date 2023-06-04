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
  isHovered: boolean[];

  constructor(private apiService: ApiService) {
    this.isHovered = Array(this.categories.length).fill(false);
    this.isHovered[0] = true;
  }

  addHoverClass(index: number) {
    this.isHovered = Array(this.categories.length).fill(false);
    this.isHovered[index] = true;
  }

  ngOnInit(): void {
    this.apiService.getCategories().subscribe((data) => {
      this.categories = data as Category[];
    });
  }
}
