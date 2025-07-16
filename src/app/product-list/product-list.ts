import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  Product = [
    { id: 1, ten_san_pham: "Giày thể thao Nike", gia: 1500000, hinh_anh: "https://khoitoanstudio.com/wp-content/uploads/2024/11/cach-chup-anh-quan-ao-trai-san-hut-hang-khi-ban-online.webp"},
    { id: 2, ten_san_pham: "Giày tây Clarks", gia: 2000000, hinh_anh: "https://khoitoanstudio.com/wp-content/uploads/2024/11/vn-11134207-7r98o-lw5h1rj2djo9cd.webp"},
    { id: 3, ten_san_pham: "Sandal nữ xinh xắn", gia: 800000, hinh_anh: "https://khoitoanstudio.com/wp-content/uploads/2024/11/sg-11134201-7repq-m1y6jb8pxbsw09.webp" },
    { id: 4, ten_san_pham: "Giày boot nam cao cấp", gia: 2500000, hinh_anh: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfj6b57l35ok92" },
    { id: 5, ten_san_pham: "Phụ kiện giày da", gia: 500000, hinh_anh: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfj6b57l35ok92" }
    ]
}
