import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  constructor(private router: Router) {}
  Users = [
    { id: 1, name: 'Nguyen Van A', email: 'nguyenvana@gmail.com', phone: '0123456789' },
    { id: 2, name: 'Tran Thi B', email: 'tranthib@gmail.com', phone: '0987654321' },
    { id: 3, name: 'Le Van C', email: 'levanc@gmail.com', phone: '0123456780' },
    { id: 4, name: 'Pham Thi D', email: 'phanthid@gmail.com', phone: '0987654322' }
  ];
  xoaUser(id: number) {
    const xacNhan = window.confirm('Bạn có chắc chắn muốn xóa người dùng này không?');
    if (xacNhan) {
      this.Users = this.Users.filter(user => user.id !== id);
    }
  }
  themUser() {
    this.router.navigate(['users/create']);
  }

}
