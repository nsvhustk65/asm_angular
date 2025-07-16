import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  Users = [
    { id: 1, ten_nguoi_dung: "Nguyễn Văn A", email: "nguyenvana@gmail.com", so_dien_thoai: "0123456789" },
    { id: 2, ten_nguoi_dung: "Trần Thị B", email: "nguyenvana@gmail.com", so_dien_thoai: "0987654321" },
    { id: 3, ten_nguoi_dung: "Lê Văn C", email: "nguyenvana@gmail.com", so_dien_thoai: "0123456789" },
    { id: 4, ten_nguoi_dung: "Phạm Thị D", email: "nguyenvana@gmail.com", so_dien_thoai: "0987654321" },
    ]
}
