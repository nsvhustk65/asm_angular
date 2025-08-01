import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, CategoryService } from '../services/category';

@Component({
  selector: 'app-category-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryList {
  Categories: Category[] = [];
  constructor(private router: Router, private categoryService : CategoryService) { }
   ngOnInit(): void {
    this.loadCategory();
  }
  loadCategory() {
    this.categoryService.getCategory().subscribe((data: Category[]) => {
      this.Categories = data;
    });
  }
  xoaCategory(id: number) {
    const xacNhan = window.confirm('Bạn có chắc chắn muốn xóa danh mục này không?');
    if (xacNhan) {
      this.Categories = this.Categories.filter(category => category.id !== id);
    }
  }
  them() {
    this.router.navigate(['/categories/create']);
  }
}
