import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './category-create.html',
  styleUrl: './category-create.css'
})
export class CategoryCreate {
  newCategory = {
    name: '',
    description: '',
  };

  constructor(public router: Router) { }

  onSubmit() {
    console.log('Danh mục mới:', this.newCategory);

    alert('Thêm danh mục thành công!');
    this.router.navigate(['/categories']);
  }
  huy() {
    this.router.navigate(['/categories']);
  }
}
