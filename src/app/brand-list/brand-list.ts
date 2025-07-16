import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brand-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './brand-list.html',
  styleUrl: './brand-list.css'
})
export class BrandList {
  Brand = [
    { id: 1, ten_thuong_hieu: "Thương hiệu A", mo_ta: "Mô tả thương hiệu A" },
    { id: 2, ten_thuong_hieu: "Thương hiệu B", mo_ta: "Mô tả thương hiệu B" },
    { id: 3, ten_thuong_hieu: "Thương hiệu C", mo_ta: "Mô tả thương hiệu C" },
    { id: 4, ten_thuong_hieu: "Thương hiệu D", mo_ta: "Mô tả thương hiệu D" },
  ];
}
