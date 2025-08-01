import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate {
  newProduct = {
    name: '',
    price: 0,
    img: ''
  };

  constructor(public router: Router) { }

  onSubmit() {
    console.log('Sản phẩm mới:', this.newProduct);

    alert('Thêm sản phẩm thành công!');
    this.router.navigate(['/products']);
  }
  huy() {
  this.router.navigate(['/products']);
}
}
