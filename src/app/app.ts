import { Component, signal } from '@angular/core';
import { CategoryList } from './category-list/category-list';
import { ProductList } from './product-list/product-list';
import { UserList } from './user-list/user-list';
import { BrandList } from './brand-list/brand-list';
@Component({
  selector: 'app-root',
  imports: [CategoryList, ProductList, UserList, BrandList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shop-angular');
}
