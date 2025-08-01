import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductCreate } from './product-create/product-create';
import { UserList } from './user-list/user-list';
import { CategoryList } from './category-list/category-list';
import { BrandList } from './brand-list/brand-list';
import { Home } from './home/home';
import { UserCreate } from './user-create/user-create';
import { CategoryCreate } from './category-create/category-create';
import { BrandCreate } from './brand-create/brand-create';


export const routes: Routes = [
  {
    path: '', component: Home,
  },
  {
    path: 'products', component: ProductList,
  },
  {
    path: 'products/create', component: ProductCreate,
  },

  {
    path: 'users', component: UserList,
  },
  {
    path: 'users/create', component: UserCreate,
  },
  {
    path: 'categories', component: CategoryList
  },
  {
    path: 'categories/create', component: CategoryCreate
  },
  {
    path: 'brads', component: BrandList,
  },
  {
    path: 'brand/create', component: BrandCreate,
  }
];
