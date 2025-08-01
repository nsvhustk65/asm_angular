import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './brand-create.html',
  styleUrl: './brand-create.css'
})
export class BrandCreate {
  newBrand = {
    name: '',
    description: '',
  };

  constructor(public router: Router) { }

  onSubmit() {
    console.log('Thương hiệu mới:', this.newBrand);

    alert('Thêm thương hiệu thành công!');
    this.router.navigate(['/brads']);
  }
  huy() {
    this.router.navigate(['/brads']);
  }
}
