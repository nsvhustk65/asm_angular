import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './brand-list.html',
  styleUrl: './brand-list.css'
})
export class BrandList {
  constructor(private router: Router) {}
  Brands = [
    { id: 1, name: 'Nike', description: 'Thương hiệu giày thể thao nổi tiếng' },
    { id: 2, name: 'Adidas', description: 'Thương hiệu giày thể thao và thời trang' },
    { id: 3, name: 'Puma', description: 'Thương hiệu giày thể thao và quần áo' },
    { id: 4, name: 'Reebok', description: 'Thương hiệu giày thể thao và phụ kiện' }
  ];

  xoaBrand(id: number) {
    const xacNhan = window.confirm('Bạn có chắc chắn muốn xóa thương hiệu này không?');
    if (xacNhan) {
      this.Brands = this.Brands.filter(brand => brand.id !== id);
    }
  }
  them() {
    this.router.navigate(['/brand/create']);
  }
}
