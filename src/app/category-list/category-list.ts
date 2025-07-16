import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryList {
  categories = [
    { id: 1, ten_danh_muc: "Giày thể thao" },
    { id: 2, ten_danh_muc: "Giày tây" },
    { id: 3, ten_danh_muc: "Sandal" },
    { id: 4, ten_danh_muc: "Giày boot" },
    { id: 5, ten_danh_muc: "Phụ kiện" },
  ]
}
