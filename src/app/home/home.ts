import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  orders = [
    { id: 101, customer: 'Nguyễn Văn A', product: 'Giày Sneaker', total: 1500000, status: 'Hoàn thành' },
    { id: 102, customer: 'Trần Thị B', product: 'Áo hoodie', total: 450000, status: 'Đang xử lý' },
    { id: 103, customer: 'Lê Văn C', product: 'Túi xách nữ', total: 890000, status: 'Đã hủy' },
  ];
}
