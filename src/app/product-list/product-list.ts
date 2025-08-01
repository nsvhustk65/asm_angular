import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Product, ProductService } from '../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit {

  products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  xoaSanPham(id: number): void {
    const xacNhan = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
    if (xacNhan) {
      this.products = this.products.filter(sp => sp.id !== id);
    }
  }

  them(): void {
    this.router.navigate(['/products/create']);
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Lỗi khi tải sản phẩm:', err);
      }
    });
  }
}
