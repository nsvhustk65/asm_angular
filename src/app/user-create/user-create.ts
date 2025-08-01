import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-create.html',
  styleUrl: './user-create.css'
})
export class UserCreate {
  newUser = {
    name: '',
    email: '',
    phone: '',
  };

  constructor(public router: Router) { }

  onSubmit() {
    console.log('User mới:', this.newUser);

    alert('Thêm user thành công!');
    this.router.navigate(['/users']);
  }
  huy() {
    this.router.navigate(['/users']);
  }
}
